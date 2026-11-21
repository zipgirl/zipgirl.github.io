import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['a girl', 'tech', 'media']),
    draft: z.boolean().default(false),
    bibliography: z.array(z.object({
      label: z.string(),
      url: z.string().url().optional(),
    })).default([]),
  }),
});

export const collections = { blog };