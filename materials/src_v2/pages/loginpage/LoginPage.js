import Main from "../components/main/Main";
import HeadBox from "../components/containers/headbox/HeadBox";
import LoginDataBox from "../components/containers/logindatabox/LoginDataBox";
import Button from "../components/button/Button";
import LinksBox from "../components/containers/linksbox/LinksBox";
import LinkItem from "../components/linkitem/LinkItem";
import Footer from "../components/containers/footer/Footer";
import { Link } from "react-router-dom";


export const LoginPage = () => {
  return (
    <Main>
      <HeadBox>Sign in</HeadBox>
      <LoginDataBox />
      <Button>sign in</Button>
      <LinksBox>
        <LinkItem href='#'>Forgot password?</LinkItem>
        <Link to={'/adv_hw22/registerpage'}>Don’t have an account? Sign Up</Link>
      </LinksBox>
      <Footer>
        <small>Copyright &copy; Your Website 2020.</small>
      </Footer>
    </Main>
  )
}