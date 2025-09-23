import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      featuredImage: image(),
      product: z.string().optional(),
      topic: z.string().optional(),
      author: z.string(),
      authorImage: z.string().optional(),
      date: z.date(),
      isFeatured: z.boolean().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

const resourcesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      categories: z.union([z.string(), z.array(z.string())]).optional(),
      featuredImage: image().optional(),
      coverImg: image().optional(),
      date: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      hubspotFormId: z.string().optional(),
      draft: z.boolean().optional().default(false),
      downloadLink: z.string().optional(),
      description: z.string().optional(),
      excerpt: z.string().optional(),
      modalFormLinkText: z.string().optional(),
      modalFormId: z.string().optional(),
    }),
});

const learnCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      featuredImage: image().optional(),
      categories: z.union([z.string(), z.array(z.string())]).optional(),
      date: z.date(),
      description: z.string().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
  resources: resourcesCollection,
  learn: learnCollection,
};
