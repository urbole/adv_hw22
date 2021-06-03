import classNames from "classnames";
import { login_wrapper, input, check_box_wrapper, text_for_checkbox } from './LoginDataBox.module.css';
import { Component } from "react";


class LoginDataBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember: false,
      error: ''
    }
  }

  handleInput = e => {
    const { name, type, checked, value } = e.target;
    const value_ = type === 'checkbox' ? checked : value;
    this.setState({ [name]: value_ });
    console.log(this.state.email);
  }

  handleFormSubmit = () => {
    const { email, password, remember } = this.state;
    localStorage.setItem('rememberMe', remember);

    if (email !== localStorage.getItem('email') || password !== localStorage.getItem('password')) {
      this.setState({ error: 'INVALID DATA' });
    }
  }

  componentDidMount() {
    const remember = localStorage.getItem('remember') === 'true';
    const email = remember ? localStorage.getItem('email') : '';
    const password = remember ? localStorage.getItem('password') : '';
    this.setState({ email, password, remember });
  }

  render() {
    return (
      <section className={classNames(login_wrapper)}>
        <input className={classNames(input, {})}
          name='email'
          type='email'
          placeholder='Email Address *'
          value={this.state.email}
          onChange={this.handleInput}
        />
        <input className={classNames(input, {})}
          name='password'
          type='password'
          placeholder='Password *'
          value={this.state.password}
          onChange={this.handleInput}
        />
        <div className={classNames(check_box_wrapper)}>
          <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.handleInput}
          />
          <span className={classNames(text_for_checkbox)}>Remember me</span>
        </div>
      </section>
    )
  }
}

export default LoginDataBox;