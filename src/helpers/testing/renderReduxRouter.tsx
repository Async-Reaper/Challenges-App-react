import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import AppRoute from '../../components/AppRoute'
import { setupStore } from '../../store/store'

export const renderReduxRoute = (component?: any, initialEntries: string = '/', initialState?: any) => {
  const store = setupStore(initialState)

  return render(
    <Provider store={(store)}>
      <MemoryRouter initialEntries={[initialEntries]}>
        {component}
        <AppRoute />
      </MemoryRouter>
    </Provider>
  )
}