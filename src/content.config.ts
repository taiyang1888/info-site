import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    attachments: z
      .array(
        z.object({
          name: z.string(),
          file: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { posts };