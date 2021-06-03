import classNames from "classnames";
import { login_wrapper } from './LoginDataBox.module.css';
import Input from "../../input/Input";


const LoginDataBox = (props) => {
  const { children, variant } = props;
  return (
    <section className={classNames(login_wrapper)}>
      <Input type='email' variant='' >Email Address *</Input>
      <Input type='password'>Password *</Input>
    </section>
  )
}

export default LoginDataBox;