import { LoginPage } from "../pages/loginpage/LoginPage";
import RegisterPage from "../pages/registerpage/RegisterPage";

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
]