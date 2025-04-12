import type { ITestRepository } from "~/applications/ITestRepository";

export class InMemoryTestRepository implements ITestRepository {
  async getTest(): Promise<string> {
    return "inmemory";
  }
}
