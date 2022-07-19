import { ReactComponentElement } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import AppRoute from '../../components/AppRoute'
import { setupStore } from '../../store/store'

export const renderReduxRoute = (component: any, initialEntries: string = '/', initialState?: any) => {
  <Provider store={setupStore(initialState)}>
    <MemoryRouter initialEntries={[initialEntries]}>
      <AppRoute />
      {component}
    </MemoryRouter>
  </Provider>
}