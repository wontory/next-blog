import Link from 'next/link'
import { formatRelative, differenceInDays, subDays, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CalendarIcon, StopwatchIcon } from '@radix-ui/react-icons'

import { cn } from '@/libs/utils'
import { BadgeProps, badgeVariants } from '@/styles/badgeVariants'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ArticleHeader({
  title,
  category,
  date,
  readingTime,
}: {
  title: string
  category: string
  date: string
  readingTime: string
}) {
  const formatDate = (today: Date, date: Date) =>
    formatRelative(subDays(today, differenceInDays(today, date)), today, {
      locale: ko,
    })

  return (
    <>
      <Link
        href={'/?category=' + category}
        key={category}
        className={cn(
          badgeVariants({
            variant: category.toLowerCase() as BadgeProps['variant'],
          }),
          'mb-6 mt-12 rounded-full text-sm font-medium',
        )}
      >
        {category}
      </Link>
      <h1 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/94912717?v=4"
            alt="@wontory"
          />
          <AvatarFallback>WT</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-base font-medium">wontory</span>·
            <a
              href="https://github.com/wontory"
              target="_blank"
              className="text-sm text-blue-600 transition hover:text-blue-800 dark:text-blue-500"
            >
              Follow
            </a>
          </div>
          <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
            <CalendarIcon />
            <time dateTime={date}>
              {formatDate(new Date(), parseISO(date))}
            </time>
            ·
            <StopwatchIcon />
            <span>{readingTime}분</span>
          </div>
        </div>
      </div>
    </>
  )
}
