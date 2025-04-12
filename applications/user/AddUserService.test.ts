import { User } from "~/domains/User";
import { AddUserService } from "./AddUserService";
import { IMUserRepository } from "~/infrastructures/repository/user/IMUserRepository";
import { describe, expect, it } from "vitest";
describe("AddUserService", () => {
  it("should add a user", async () => {
    const userRepository = new IMUserRepository();
    const users = await userRepository.findAll();
    expect(users.length).toBe(2);
    const addUserService = new AddUserService(userRepository);
    const user = new User("", "John");
    addUserService.execute(user);
    const users2 = await userRepository.findAll();
    expect(users2.length).toBe(3);
    expect(users2[2].name).toBe("John");
  });
});
