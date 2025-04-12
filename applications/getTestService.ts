import type { ITestRepository } from "./ITestRepository";

export class GetTestService {
  constructor(private readonly testRepository: ITestRepository) {}
  async getTest() {
    return this.testRepository.getTest();
  }
}
