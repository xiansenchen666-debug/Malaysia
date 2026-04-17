import { Hono } from "https://deno.land/x/hono@v4.1.0/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v4.1.0/middleware.ts";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));

Deno.serve({ port: 8000 }, app.fetch);
