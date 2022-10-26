import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderReduxRoute } from "../../../../helpers/testing/renderReduxRouter";
import SidebarPrivate from "./SidebarPrivate";

describe("Testing sidebar private", () => {
  test("link settings", () => {
    renderReduxRoute(<SidebarPrivate />);
    const linkSettings = screen.getByTestId("link-settings");
    userEvent.click(linkSettings);
    expect(linkSettings).toBeInTheDocument();
    // expect(screen.getByTestId('settings-page')).toBeInTheDocument()
  });

  test("link challenges", () => {
    renderReduxRoute(<SidebarPrivate />);
    const linkChallenges = screen.getByTestId("link-challenges");
    userEvent.click(linkChallenges);
    expect(screen.getByTestId("challenges-page")).toBeInTheDocument();
  });

  test("Show button logout", () => {
    renderReduxRoute(<SidebarPrivate />);
    expect(screen.getByTestId("button-logout")).toBeInTheDocument();
  });
});
