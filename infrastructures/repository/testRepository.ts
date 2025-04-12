import type { ITestRepository } from "~/applications/ITestRepository";

export class TestRepository implements ITestRepository {
  async getTest(): Promise<string> {
    return "test";
  }
}
