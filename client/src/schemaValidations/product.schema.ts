import { z } from "zod";

export const CreateProductBody = z.object({
  name: z.string().min(1).max(256),
  // Đổi từ z.coerce.number().positive() -> z.number().positive()
  price: z.number().positive(),
  description: z.string().max(10000),
  image: z.string().url(),
});

export type CreateProductBodyType = z.infer<typeof CreateProductBody>;

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ProductResType = z.infer<typeof ProductRes>;

export const ProductRes = z.object({
  data: ProductSchema,
  message: z.string(),
});

export const ProductListRes = z.object({
  data: z.array(ProductSchema),
  message: z.string(),
});

export type ProductListResType = z.infer<typeof ProductListRes>;

export const UpdateProductBody = CreateProductBody;
export type UpdateProductBodyType = z.infer<typeof UpdateProductBody>;

export const ProductParams = z.object({
  id: z.coerce.number(),
});
export type ProductParamsType = z.infer<typeof ProductParams>;
