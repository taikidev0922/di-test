import type { User } from "~/domains/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  addUser(user: User): Promise<void>;
}
