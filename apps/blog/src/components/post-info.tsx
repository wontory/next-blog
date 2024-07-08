import { format } from 'date-fns'
import Image from 'next/image'
import { cn } from '@wontory/util/cn'

import type { Post } from '~/types/post'

function PostInfo({
  post,
  mode,
  className,
}: {
  post: Post
  mode: 'card' | 'header'
  className?: string
}) {
  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      <h1
        className={cn(
          mode === 'header' ? 'text-5xl' : 'text-lg',
          'font-semibold',
        )}
      >
        {post.title}
      </h1>
      <p className="text-muted-foreground line-clamp-2">{post.subtitle}</p>
      <div className="mt-4 grid grid-cols-2 text-sm font-light">
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground/80">Written by</span>
          <div className="flex gap-4">
            <Image
              src={post.author.profilePicture}
              alt={post.author.username}
              width={20}
              height={20}
              className="shrink-0 rounded-full object-cover"
            />
            <span>{post.author.username}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-muted-foreground/80">Published on</span>
          <div>{format(post.publishedAt, 'MMMM d, yyyy')}</div>
        </div>
      </div>
    </div>
  )
}

export { PostInfo }