import classNames from "classnames";
import { register_data_wrapper, names_wrapper, login_wrapper } from './RegisterDataBox.module.css';
import Input from "../../input/Input";


const RegisterDataBox = (props) => {
  const { children, variant } = props;
  return (
    <div className={classNames(register_data_wrapper)}>
      <section className={classNames(names_wrapper)}>
        <Input type='text'>First Name *</Input>
        <Input type='text' variant=''>Last Name *</Input>
      </section>
      <section className={classNames(login_wrapper)}>
        <Input type='email' variant=''>Email Address *</Input>
        <Input type='password'>Password *</Input>
      </section>
    </div>
  )
}

export default RegisterDataBox;