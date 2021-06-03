
import { HomePage } from '../pages/home';
import { AccountPage } from '../pages/account';
import { NotAllowedPage } from '../pages/restricted';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';

export const appRoutes = [
  {
    path: '/adv_hw22',
    exact: true,
    component: HomePage
  },
  {
    path: '/adv_hw22/loginpage',
    exact: true,
    component: LoginPage
  },
  {
    path: '/adv_hw22/registerpage',
    component: RegisterPage
  },
  {
    path: '/adv_hw22/account',
    component: AccountPage,
    isPrivate: true
  },
  {
    path: '/adv_hw22/restricted',
    component: NotAllowedPage
  }
];