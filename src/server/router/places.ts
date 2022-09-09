import { createRouter } from "./context";
import { z } from "zod";

export const placesRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.place.findMany();
    },
  })
  .mutation("add", {
    input: z
    .object({
      name: z.string(),
      rating: z.number(),
      address: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.place.create({data: {...input}});
    },
  });
