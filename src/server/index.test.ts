import { describe, expect, it } from "bun:test";
import { app } from "./index";

describe("Elysia Health Check", () => {
  it("returns status ok", async () => {
    const res = await app.handle(new Request("http://localhost/api/health"));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.status).toBe("ok");
  });
});
