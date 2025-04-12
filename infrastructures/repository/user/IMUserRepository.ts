import type { IUserRepository } from "~/applications/user/IUserRepository";
import { User } from "~/domains/User";

export class IMUserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [new User("1", "John"), new User("2", "Jane")];
  }
}
