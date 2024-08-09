import { Fragment } from 'react'
import { format } from 'date-fns'
import Image from 'next/image'
import { cn } from '@wontory/util/cn'
import { cva, type VariantProps } from '@wontory/util/cva'

import type { Post } from '#site/content'
import { authors as allAuthors } from '#site/content'

const infoVariants = cva('font-semibold', {
  variants: {
    variant: {
      card: 'text-lg',
      header: 'text-5xl',
    },
  },
  defaultVariants: {
    variant: 'card',
  },
})

function PostInfo({
  post,
  variant,
  className,
}: { post: Post; className?: string } & VariantProps<typeof infoVariants>) {
  const authors = post.authors.map((author: string) =>
    allAuthors.find(({ slug }) => slug === `authors/${author}`),
  )

  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      <h1 className={cn(infoVariants({ variant }))}>{post.title}</h1>
      <p className="text-muted-foreground line-clamp-2">{post.description}</p>
      <div className="mt-4 grid grid-cols-2 text-sm font-light">
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground/80">Written by</span>
          <div className="flex gap-4">
            {authors.map(
              (author: { slug: string; avatar: string; title: string }) =>
                author ? (
                  <Fragment key={author.slug}>
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={20}
                      height={20}
                      className="shrink-0 rounded-full object-cover"
                    />
                    <span>{author.title}</span>
                  </Fragment>
                ) : null,
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground/80">Published on</span>
          <div>{format(post.date, 'MMMM d, yyyy')}</div>
        </div>
      </div>
    </div>
  )
}

export { PostInfo, infoVariants }
