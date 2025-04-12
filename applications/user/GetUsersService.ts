import type { User } from "~/domains/User";
import type { IUserRepository } from "./IUserRepository";

export class GetUsersService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
