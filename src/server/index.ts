import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

export const app = new Elysia({ prefix: "/api" })
  .use(cors())
  .get("/health", () => ({ status: "ok", timestamp: new Date().toISOString() }))
  .get("/config", () => ({ activeSupplier: "digiflazz", maintenance: false }));

export type App = typeof app;
