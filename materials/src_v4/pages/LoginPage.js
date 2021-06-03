import { Component } from 'react';
import { ReactComponent as Locked } from '../assets/ico/padlock.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  head_wrapper, locked_wrapper, link_item, footer, login_page_links,
  register_page_wrapper, login_wrapper, input, check_box_wrapper,
  text_for_checkbox, wrapper, for_checked, submit_btn
} from '../styles/RegisterPage.module.css';

// localStorage.getItem('email')
// localStorage.getItem('password')

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      rememberLoginData: false,
      isLoginIn: false
    }

    this.rememberClick = this.rememberClick.bind(this);
  }

  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  rememberClick() {
    this.setState(state => ({
      rememberLoginData: !state.rememberLoginData
    }));
  }

  loginClick = e => {
    e.preventDefault();
    console.log(this.state)

    this.setState({ isLoginIn: true })

    // this.setState({
    //   email: '',
    //   password: ''
    // })
  }

  render() {



    if (this.state.isLoginIn) {


      if (this.state.email !== localStorage.getItem('email') && this.state.password !== localStorage.getItem('password')) {
        return (<>
          <p>login is not successful</p>
          <Link className={classNames(link_item)} to={'/'}>try again</Link>
        </>)
      } else {
        return (
          <>
            <p>login successful</p>
            <Link className={classNames(link_item)} to={'/adv_hw22/hiuser'}>enter site</Link>
          </>
        )
    }


  } else {
  return (
    <form className={classNames(register_page_wrapper)}
      onSubmit={this.loginClick}>
      <div className={classNames(head_wrapper)}>
        <div className={classNames(locked_wrapper)}>
          <Locked />
        </div>
        <p>Sign in</p>
      </div>
      <section className={classNames(login_wrapper)}>
        <div className={classNames(wrapper)}>
          <span className={classNames(for_checked, {})}></span>
          <input
            className={classNames(input, {})}
            name='email'
            type='email'
            placeholder='Email Address *'
            value={this.state.email}
            onChange={this.handleInput}
          />
        </div>
        <div className={classNames(wrapper)}>
          <span className={classNames(for_checked, {})}></span>
          <input
            className={classNames(input, {})}
            name='password'
            type='password'
            placeholder='Password *'
            value={this.state.password}
            onChange={this.handleInput}
          />
        </div>
        <div className={classNames(check_box_wrapper)}>
          <input
            name='subscribe'
            type='checkbox'
            subscribe={this.state.subscribe}
            onClick={this.rememberClick}
          />
          <span className={classNames(text_for_checkbox)}>Remember me.</span>
        </div>
      </section>
      <button
        className={classNames(submit_btn)}
        disabled={this.state.email.length > 0 && this.state.password.length > 7 ? false : true}
        type='submit'>
        sign in
        </button>
      <div className={classNames(login_page_links)}>
        <a className={classNames(link_item)}>Forgot password?</a>
        <Link className={classNames(link_item)} to={'/adv_hw22/registerpage'}>Don’t have an account? Sign Up</Link>
      </div>
      <small className={(footer)}>Copyright &copy; Your Website 2020.</small>
    </form>
  )
}
  }
}

export default LoginPage;