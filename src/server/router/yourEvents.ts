import { createRouter } from "./context";
import { z } from "zod";

export const yourEventsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.yourEvent.findMany();
    },
  })
  .mutation("add", {
    input: z
    .object({
      organizer: z.string(),
      date: z.string(),
      place: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.yourEvent.create({data: {...input}});
    },
  });
