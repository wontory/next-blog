import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['CS', 'React', 'JavaScript', 'Review']),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      toc: z.boolean().default(true),
      comment: z.boolean().default(true),
      draft: z.boolean().optional(),
    }),
})

const project = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      toc: z.boolean().default(false),
      comment: z.boolean().default(false),
    }),
})

export const collections = { blog, project }
