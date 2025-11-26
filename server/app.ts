import { Hono } from "hono";

export type AppType = typeof app;

export const app = new Hono()
  .basePath("/api")

  .get("/", (context) => {
    return context.json({ firstName: "John", lastName: "Smith" });
  });
