import {
  TransactionsPage,
  UserDetailsPage,
  HomePage
} from '../components/pages'

export const Paths = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/table',
    component: TransactionsPage
  },
  {
    path: '/user',
    component: UserDetailsPage
  }
]
