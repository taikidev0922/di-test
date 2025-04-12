import { GetTestService } from "~/applications/GetTestService";
import { GetUsersService } from "~/applications/user/GetUsersService";
import { InMemoryTestRepository } from "~/infrastructures/repository/IMTestRepository";
import { TestRepository } from "~/infrastructures/repository/TestRepository";
import { IMUserRepository } from "~/infrastructures/repository/user/IMUserRepository";
import { UserRepository } from "~/infrastructures/repository/user/UserRepository";

// plugins/di-container.ts
export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const isProduction = runtimeConfig.public.env === "production";

  // リポジトリのインスタンスを一元管理
  const repositories = {
    testRepository: isProduction
      ? new TestRepository()
      : new InMemoryTestRepository(),
    userRepository: isProduction
      ? new UserRepository()
      : new IMUserRepository(),
  };

  // サービスのインスタンスを一元管理
  const services = {
    getTestService: new GetTestService(repositories.testRepository),
    getUsersService: new GetUsersService(repositories.userRepository),
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
