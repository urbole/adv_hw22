import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { Store } from '../App';
import { ReactComponent as Locked } from '../assets/ico/padlock.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  head_wrapper, locked_wrapper, link_item, footer, login_page_links,
  page_wrapper, login_wrapper, input, check_box_wrapper,
  text_for_checkbox, wrapper, for_checked, submit_btn
} from './pages.module.css';


function LoginPage() {
  const {
    actions: {
      loginUser
    }
  } = useContext(Store);

  const [details, setDetails] = useState({
    email: '',
    password: '',
    rememberLogin: false,
  });

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {};

    if (details.rememberLogin) {
      localStorage.setItem('savedEmail', details.email);
      localStorage.setItem('savedPassword', details.password);
    } else {
      localStorage.setItem('savedEmail', '');
      localStorage.setItem('savedPassword', '');
    }

    if (
      details.email === localStorage.getItem('email') &&
      details.password === localStorage.getItem('password')
    ) {
      loginUser(user);
      history.push('/adv_hw22/account');
    } else {
      alert('Error, you can not login, Try again.');
    }
  };

  return (
    <form className={classNames(page_wrapper)}
      onSubmit={handleSubmit}>
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
            value={details.email}
            onChange={
              e => setDetails({ ...details, email: e.target.value })
            }
          />
        </div>
        <div className={classNames(wrapper)}>
          <span className={classNames(for_checked, {})}></span>
          <input
            className={classNames(input, {})}
            name='password'
            type='password'
            placeholder='Password *'
            value={details.password}
            onChange={
              e => setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <div className={classNames(check_box_wrapper)}>
          <input
            name='rememberLogin'
            type='checkbox'
            onChange={
              e => setDetails({ ...details, rememberLogin: !details.rememberLogin })
            }
          />
          <span className={classNames(text_for_checkbox)}>Remember me</span>
        </div>
      </section>
      <button
        className={classNames(submit_btn)}
        disabled={details.email.length > 0 && details.password.length > 7 ? false : true}
        type='submit'
      >
        sign in
        </button>
      <div className={classNames(login_page_links)}>
        <Link className={classNames(link_item)} to={'#'}>Forgot password?</Link>
        <Link className={classNames(link_item)} to={'/adv_hw22/registerpage'}>Don’t have an account? Sign Up</Link>
      </div>
      <small className={(footer)}>Copyright &copy; Your Website 2020.</small>
    </form>
  )
}

export default LoginPage;