import { Routes as RouterRoutes, Route } from 'react-router-dom'
import { Paths } from './path'

export const Routes = () => (
  <RouterRoutes>
    {Paths.map((route) => (
      <Route
        path={route.path}
        key={route.path}
        element={<route.component routes={route.routes} />}
      />
    ))}
  </RouterRoutes>
)
