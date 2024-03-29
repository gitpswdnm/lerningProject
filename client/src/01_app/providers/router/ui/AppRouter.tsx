import { PageLoader } from '03_widgets/PageLoader'
import type { AppRouteProps } from '06_shared/config/routeConfig/routeConfig'
import { routeConfig } from '06_shared/config/routeConfig/routeConfig'
import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAdmin } from './RequireAdmin'
import { RequireAuth } from './RequireAuth'


export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className='page-wrapper'>{route.element}</div>
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly
            ? route.adminOnly
              ? (<RequireAdmin><>{element}</></RequireAdmin>)
              : (<RequireAuth>{element}</RequireAuth>)
            : (element)
        }
      />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
