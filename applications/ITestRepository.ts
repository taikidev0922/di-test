export interface ITestRepository {
  getTest(): Promise<string>;
}
