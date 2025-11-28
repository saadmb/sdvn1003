import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hi Mom!");
});

Deno.serve(app.fetch);
