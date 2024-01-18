'use client'

import { useState, useEffect } from 'react'

import { cn } from '@/libs/utils'
import type { Article } from '@/.contentlayer/generated'

export function TableOfContents({
  headings,
}: {
  headings: Article['headings']
}) {
  const { curSection } = useTocScroll(headings)

  return (
    <div className="sticky top-32 hidden xl:block">
      <div className="absolute left-full ml-10 w-60 text-foreground/40 2xl:ml-20">
        {headings.map(
          (heading: { slug: string; level: number; text: string }) => (
            <div
              key={`#${heading.slug}`}
              className={cn(
                'transition hover:text-foreground/70',
                heading.slug === curSection && 'font-medium text-foreground',
                heading.level === 3 && 'pl-4',
              )}
            >
              <a data-level={heading.level} href={`#${heading.slug}`}>
                {heading.text}
              </a>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

function useTocScroll(headings: Article['headings']) {
  const [curSection, setCurSection] = useState<string>('')
  const [heights, setHeights] = useState<Article['headings']>(null)

  const getScrollTop = () =>
    document.documentElement?.scrollTop || document.body.scrollTop

  useEffect(() => {
    const updateHeights = () =>
      setHeights(
        headings.map((heading: { slug: string }) => {
          const height =
            (document.getElementById(heading.slug)?.getBoundingClientRect()
              .top || 0) + getScrollTop()
          return { ...heading, height }
        }),
      )

    updateHeights()

    let timeoutId: ReturnType<typeof setTimeout>

    const trackHeight = () => {
      const prev = document.body.scrollHeight
      if (prev !== document.body.scrollHeight) updateHeights()

      timeoutId = setTimeout(trackHeight, 250)
    }

    timeoutId = setTimeout(trackHeight, 250)

    return () => timeoutId && clearTimeout(timeoutId)
  }, [headings])

  useEffect(() => {
    const onScroll = () => {
      if (!heights) return

      const cur = heights
        .slice()
        .reverse()
        .find(({ height }: { height: number }) => getScrollTop() >= height - 96)

      setCurSection(cur?.slug || '')
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [heights])

  return { curSection }
}
