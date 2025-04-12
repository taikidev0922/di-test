import { User } from "~/domains/User";

export const useUser = () => {
  const users = ref<User[]>([]);

  const getUsers = async () => {
    users.value = [];
    users.value = await useNuxtApp().$di.services.getUsersService.execute();
  };

  const addUser = async (user: User) => {
    const addUser = new User(user.id, user.name);
    await useNuxtApp().$di.services.addUserService.execute(addUser);
    getUsers();
  };

  return { users, getUsers, addUser };
};
