import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hi Mom!");
});

app.get("/list", (c) => {
  return c.json([
    { name: "Saad", age: 33 },
    { name: "Jad", age: 30 },
  ]);
});

Deno.serve(app.fetch);
