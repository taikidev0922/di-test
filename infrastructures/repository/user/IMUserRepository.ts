import type { IUserRepository } from "~/applications/user/IUserRepository";
import { User } from "~/domains/User";

export class IMUserRepository implements IUserRepository {
  private users: User[] = [new User("1", "John"), new User("2", "Jane")];
  async findAll(): Promise<User[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log(this.users);
    return this.users;
  }

  async addUser(user: User): Promise<void> {
    user.id = (this.users.length + 1).toString();
    console.log(user);
    this.users.push(user);
  }
}
