import Main from "../components/main/Main";
import HeadBox from "../components/containers/headbox/HeadBox";
import Button from "../components/button/Button";
import LinksBox from "../components/containers/linksbox/LinksBox";
import Footer from "../components/containers/footer/Footer";
import RegisterDataBox from "../components/containers/registerdatabox/RegisterDataBox";
import { Link } from "react-router-dom";
// import { RegisterDataBox } from '../../pages/components/containers/registerdatabox/RegisterDataBox';


const RegisterPage = (props) => {
  // const { firstName, lastName, email, password } = props;
  return (
    <Main>
      <HeadBox>Sign up</HeadBox>
      <RegisterDataBox />
      <Button
      // disabled={firstName && lastName && email && password ? false : true }
      >sign up</Button>
      <LinksBox>
        <div></div>
        <Link to={'/adv_hw22'}>Already have an account? Sign in</Link>
      </LinksBox>
      <Footer>
        <small>Copyright &copy; Your Website 2020.</small>
      </Footer>
    </Main>
  )
}

export default RegisterPage;