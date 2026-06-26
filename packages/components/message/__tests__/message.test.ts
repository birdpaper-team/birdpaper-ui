import { describe, expect, it } from "vitest";
import Message from "../src/instance";

describe("Message", () => {
  it("MessageManager can be instantiated", () => {
    expect(Message).toBeDefined();
  });
});
