import { GetTestService } from "~/applications/getTestService";
import { InMemoryTestRepository } from "~/infrastructures/repository/iMTestRepository";
import { TestRepository } from "~/infrastructures/repository/testRepository";

export default defineStore("test", () => {
  const testService = ref<GetTestService | null>(null);
  const test = ref<string | null>(null);
  const runtimeConfig = useRuntimeConfig();
  if (runtimeConfig.public.env === "development") {
    testService.value = new GetTestService(new InMemoryTestRepository());
  } else if (runtimeConfig.public.env === "production") {
    testService.value = new GetTestService(new TestRepository());
  }

  async function getTest() {
    if (!testService.value) {
      throw new Error("testService is not initialized");
    }
    test.value = await testService.value.getTest();
  }

  return { getTest, test };
});
