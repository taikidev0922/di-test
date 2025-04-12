// @noErrors
import { test, expect, describe } from "vitest";
import App from "~/app.vue";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { screen, fireEvent } from "@testing-library/vue";

describe("User Page", () => {
  test("user page should render", async () => {
    const component = await mountSuspended(App, {
      route: "/user",
    });
    expect(component.text()).toMatchInlineSnapshot(`"HomeUsersUsersGet UsersAdd User"`);
  });

  test("user page should render users", async () => {
    const component = await renderSuspended(App, {
      route: "/user",
    });
    await fireEvent.click(await component.getByTestId("get-users"));
    const user1 = await component.findByText("John");
    const user2 = await component.findByText("Jane");
    expect(user1).toBeDefined();
    expect(user2).toBeDefined();
  });
});
