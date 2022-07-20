import { screen } from "@testing-library/react";
import { renderReduxRoute } from "../../../helpers/testing/renderReduxRouter";
import Sidebar from "./Sidebar";

describe('Testing show sidebar', () => {

   test('Private sidebar', async () => {
      renderReduxRoute(<Sidebar />, '/', {
         login: { loginStatus: true }
      })

      expect(screen.getByTestId('sidebar-private')).toBeInTheDocument()

   })

   test('Public sidebar', async () => {
      renderReduxRoute(<Sidebar />, '/', {
         login: { loginStatus: false }
      })

      expect(screen.getByTestId('sidebar-public')).toBeInTheDocument()
   })
})