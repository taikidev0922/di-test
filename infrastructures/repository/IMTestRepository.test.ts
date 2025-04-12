import { describe, expect, test } from "vitest";
import { InMemoryTestRepository } from "./IMTestRepository";

describe("IMTestRepository", () => {
  test("should return test", async () => {
    const iMTestRepository = new InMemoryTestRepository();

    const result = await iMTestRepository.getTest();
    expect(result).toBe("inmemory");
  });
});
