import { HiUserPage } from '../pages/HiUserPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const appRoutes = [
  {
    path: '/adv_hw22',
    exact: true,
    component: LoginPage
  },
  {
    path: '/adv_hw22/registerpage',
    component: RegisterPage
  },
  // {
  //   path: '/adv_hw22/errorlogin',
  //   component: ErrorLoginPage
  // },
  {
    path: '/adv_hw22/hiuser',
    component: HiUserPage
  }
]