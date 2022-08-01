import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import AppRoute from '../../components/AppRoute'
import { setupStore } from '../../store/store'

export const renderReduxRoute = (component?: any, options?: any) => {
  const store = setupStore(options?.route)

  return render(
    <Provider store={(store)}>
      <MemoryRouter initialEntries={[options?.initialEntries]}>
        {component}
        <AppRoute />
      </MemoryRouter>
    </Provider>
  )
}