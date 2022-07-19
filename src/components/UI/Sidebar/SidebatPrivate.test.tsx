import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderReduxRoute } from "../../../helpers/testing/renderReduxRouter";
import SidebarPrivate from "./SidebarPrivate";


describe('Testing sidebar private', () => {

  test('link settings', () => {
    renderReduxRoute(<SidebarPrivate />);
    const linkSettings = screen.getByTestId('link-settings');
    userEvent.click(linkSettings)
    // screen.debug()
    expect(screen.getByTestId('settings-page')).toBeInTheDocument()
  });

  test('link challenge by id', () => {
    renderReduxRoute(<SidebarPrivate />);
    const linkSettings = screen.getByTestId('link-challengeById');
    userEvent.click(linkSettings)
    // screen.debug()
    expect(screen.getByTestId('challengeById-page')).toBeInTheDocument()
  });

  it('link challenges', () => {
    renderReduxRoute(<SidebarPrivate />);
    const linkSettings = screen.getByTestId('link-challenges');
    userEvent.click(linkSettings)
    // screen.debug()
    expect(screen.getByTestId('challenges-page')).toBeInTheDocument()
  });
});