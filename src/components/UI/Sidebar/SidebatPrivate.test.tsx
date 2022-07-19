import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderReduxRoute } from "../../../helpers/testing/renderReduxRouter";
import SidebarPrivate from "./SidebarPrivate";


describe('Testing sidebar private', () => {

  test('Test link settings', () => {
    renderReduxRoute(<SidebarPrivate />);
    const linkSettings = screen.getByTestId('link-settings');
    userEvent.click(linkSettings)
    expect(screen.getByTestId('settings-page')).toBeInTheDocument()
  });

});