import type { User } from "~/domains/User";

export const useUser = () => {
  const users = ref<User[]>([]);

  const getUsers = async () => {
    users.value = await useNuxtApp().$di.services.getUsersService.execute();
  };

  return { users, getUsers };
};
