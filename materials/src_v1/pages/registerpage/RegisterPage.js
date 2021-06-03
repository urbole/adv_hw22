import Main from "../components/main/Main";
import HeadBox from "../components/containers/headbox/HeadBox";
import Button from "../components/button/Button";
import LinksBox from "../components/containers/linksbox/LinksBox";
import Footer from "../components/containers/footer/Footer";
import CheckBox from "../components/containers/checkbox/CheckBox";
import RegisterDataBox from "../components/containers/registerdatabox/RegisterDataBox";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  return (
    <Main>
      <HeadBox>Sign up</HeadBox>
      <RegisterDataBox />
      <CheckBox>
        I want to receive inspiration, marketing promotions and updates via email.
      </CheckBox>
      <Button>sign up</Button>
      <LinksBox>
        <div></div>
        <Link to={'/adv_hw22'}>Alredy have an account? Sign in</Link>
      </LinksBox>
      <Footer>
        <small>Copyright &copy; Your Website 2020.</small>
      </Footer>
    </Main>
  )
}

export default RegisterPage;