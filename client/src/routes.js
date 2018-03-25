import Login from './components/Login'
import Product from './components/Product'
import UserProfile from './components/UserProfile'
export const routes = [
  {path: '',component:Login},
  {path: '/product',component:Product},
  {path: '/profile',component:UserProfile}
]
