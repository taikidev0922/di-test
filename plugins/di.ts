import { GetUsersService } from "~/applications/user/GetUsersService";
import { AddUserService } from "~/applications/user/addUserService";
import { IMUserRepository } from "~/infrastructures/repository/user/IMUserRepository";
import { UserRepository } from "~/infrastructures/repository/user/UserRepository";

// plugins/di-container.ts
export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const isProduction = runtimeConfig.public.env === "production";

  // リポジトリのインスタンスを一元管理
  const repositories = {
    userRepository: isProduction
      ? new UserRepository()
      : new IMUserRepository(),
  };

  // サービスのインスタンスを一元管理
  const services = {
    getUsersService: new GetUsersService(repositories.userRepository),
    addUserService: new AddUserService(repositories.userRepository),
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
