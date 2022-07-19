import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderReduxRoute } from "../../../helpers/testing/renderReduxRouter";
import SidebarPublic from "./SidebarPublic";


describe('Testing sidebar private', () => {

   test('link settings', () => {
      renderReduxRoute(<SidebarPublic />);
      const linkChallenges = screen.getByTestId('link-challenges');
      userEvent.click(linkChallenges)
      expect(screen.getByTestId('challenges-page')).toBeInTheDocument()
   });

   test('link login', () => {
      renderReduxRoute(<SidebarPublic />);
      const linkChallenges = screen.getByTestId('link-login');
      userEvent.click(linkChallenges)
      expect(screen.getByTestId('login-page')).toBeInTheDocument()
   });

   test('link signup', () => {
      renderReduxRoute(<SidebarPublic />);
      const linkChallenges = screen.getByTestId('link-signup');
      userEvent.click(linkChallenges)
      expect(screen.getByTestId('signup-page')).toBeInTheDocument()
   });
});