import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderReduxRoute } from "../../../../shared/helpers/testing/renderReduxRouter";
import SidebarPublic from "./SidebarPublic";

describe("Testing sidebar public", () => {
  test("link challenges", () => {
    renderReduxRoute(<SidebarPublic />);
    const linkChallenges = screen.getByTestId("link-challenges");
    userEvent.click(linkChallenges);
    expect(screen.getByTestId("challenges-page")).toBeInTheDocument();
  });

  test("link login", () => {
    renderReduxRoute(<SidebarPublic />);
    const linkLogin = screen.getByTestId("link-login");
    userEvent.click(linkLogin);
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  test("link signup", () => {
    renderReduxRoute(<SidebarPublic />);
    const linkSignup = screen.getByTestId("link-signup");
    userEvent.click(linkSignup);
    expect(screen.getByTestId("signup-page")).toBeInTheDocument();
  });
});
