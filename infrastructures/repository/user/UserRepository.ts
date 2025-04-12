import type { IUserRepository } from "~/applications/user/IUserRepository";
import type { User } from "~/domains/User";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return [];
  }

  async addUser(user: User): Promise<void> {
    return;
  }
}
