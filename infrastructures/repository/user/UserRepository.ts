import type { IUserRepository } from "~/applications/user/IUserRepository";
import type { User } from "~/domains/User";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const { $supabase } = useNuxtApp();

    const { data, error } = await $supabase.from("users").select("*");

    if (error) {
      console.error("Error fetching users:", error);
      throw error;
    }

    return data as User[];
  }

  async addUser(user: User): Promise<void> {
    const { $supabase } = useNuxtApp();

    const { error } = await $supabase.from("users").insert({
      name: user.name,
    });

    if (error) {
      console.error("Error adding user:", error);
      throw error;
    }

    return;
  }
}
