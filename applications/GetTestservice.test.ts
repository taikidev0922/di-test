import { describe, expect, test } from "vitest";
import { GetTestService } from "./GetTestService";
import { InMemoryTestRepository } from "~/infrastructures/repository/IMTestRepository";

describe("getTestservice", () => {
  test("should return test", async () => {
    const getTestservice = new GetTestService(new InMemoryTestRepository());
    const result = await getTestservice.getTest();
    expect(result).toBe("inmemory");
  });
});
