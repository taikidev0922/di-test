import type { User } from "~/domains/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
}
