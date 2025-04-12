import type { IUserRepository } from "./IUserRepository";
import type { User } from "~/domains/User";
export class AddUserService {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(user: User): Promise<void> {
    await this.userRepository.addUser(user);
  }
}
