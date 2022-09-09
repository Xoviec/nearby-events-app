import { createRouter } from "./context";
import { z } from "zod";

export const carsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.car.findMany();
    },
  })
  .mutation("add", {
    input: z
    .object({
      producent: z.string(),
      model: z.string(),
      vmax: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.car.create({data: {...input}});
    },
  });
