// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { placesRouter } from "./places";
import { carsRouter } from "./cars";
import { OfficialEvents } from "./officialEvents";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter)
  .merge("place.", placesRouter)
  .merge("car.", carsRouter)
  .merge("officialEvent.", officialEventsRouter);
  

// export type definition of API
export type AppRouter = typeof appRouter;
