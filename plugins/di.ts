import { GetTestService } from "~/applications/getTestService";
import { InMemoryTestRepository } from "~/infrastructures/repository/iMTestRepository";
import { TestRepository } from "~/infrastructures/repository/testRepository";

// plugins/di-container.ts
export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const isProduction = runtimeConfig.public.env === "production";

  // リポジトリのインスタンスを一元管理
  const repositories = {
    testRepository: isProduction
      ? new TestRepository()
      : new InMemoryTestRepository(),
  };

  // サービスのインスタンスを一元管理
  const services = {
    getTestService: new GetTestService(repositories.testRepository),
    // ...
  };

  return {
    provide: {
      di: {
        repositories,
        services,
      },
    },
  };
});
