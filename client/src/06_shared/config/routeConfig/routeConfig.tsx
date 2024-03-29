import { AdminPage } from '02_pages/AdminPage/ui/AdminPage'
import { AuthPage } from '02_pages/AuthPage/ui/AuthPage'
import { BasketPage } from '02_pages/BasketPage/ui/BasketPage'
import { DeviceDetailsPage } from '02_pages/DeviceDetailsPage/ui/DeviceDetailsPage'
import { NotFoundPage } from '02_pages/NotFoundPage/ui/NotFoundPage'
import { ShopPage } from '02_pages/ShopPage/ui/ShopPage'
import type { RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
	authOnly?: boolean
  adminOnly?: boolean
}
 
export enum AppRoutes {
	ADMIN = 'admin',
	LOGIN = 'login',
	REGISTRATION = 'registration',
	DEVICE_DETAILS = 'device_details',
	SHOP = 'shop',
	BASKET = 'basket',

	//last
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.SHOP]: '/',
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTRATION]: '/registration',
  [AppRoutes.DEVICE_DETAILS]: '/device/', //+id
  [AppRoutes.BASKET]: '/basket',

  //last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.SHOP]: {
    path: RoutePath.shop,
    element: <ShopPage />
  },
  [AppRoutes.ADMIN]: {
    path: RoutePath.admin,
    element: <AdminPage />,
    authOnly: true,
    adminOnly: true
  },
  [AppRoutes.DEVICE_DETAILS]: {
    path: `${RoutePath.device_details}:id`,
    element: <DeviceDetailsPage />
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <AuthPage />
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath.registration,
    element: <AuthPage />
  },
  [AppRoutes.BASKET]: {
    path: RoutePath.basket,
    element: <BasketPage />,
    authOnly: true
  },

  //last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}

