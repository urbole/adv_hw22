import classNames from 'classnames';
import { Component } from 'react';
import { ReactComponent as Locked } from '../assets/ico/padlock.svg';
import { ReactComponent as Checked } from '../assets/ico/checked.svg';
import { Link } from 'react-router-dom';
import {
  head_wrapper, locked_wrapper, link_item, footer,
  register_page_wrapper, names_wrapper, login_wrapper,
  input, check_box_wrapper, text_for_checkbox, error, redy_to_loggined,
  error_border, correct_border, correct, wrapper, for_checked, submit_btn
} from '../styles/RegisterPage.module.css';

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const passwordRegex = RegExp(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/);

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      subscribe: false,
      message: {
        forFirstName: '',
        forLastName: '',
        forEmail: '',
        forPassword: ''
      },
      registered: 'false'
    }

    this.subscribeClick = this.subscribeClick.bind(this);
  }

  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let message = this.state.message;

    switch (name) {
      case 'firstName': message.forFirstName = value.length < 3 ? 'minimum 3 characters required' : 'correct';
        break;
      case 'lastName': message.forLastName = value.length < 3 ? 'minimum 3 characters required' : 'correct';
        break;
      case 'email': message.forEmail = emailRegex.test(value) ? 'correct' : 'invalid email address';
        break;
      case 'password': message.forPassword = passwordRegex.test(value) ? 'minimum 8 characters required' : 'correct';
        break;
      default:
        break;
    }

    this.setState({ message, [name]: value });
  }

  subscribeClick() {
    this.setState(state => ({
      subscribe: !state.subscribe
    }));
  }

  singUpClick = e => {
    e.preventDefault();
    this.setState({ registered: 'true' })

    console.log(this.state);

    localStorage.setItem('firstName', this.state.firstName);
    localStorage.setItem('lastName', this.state.lastName);
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('password', this.state.password);
    localStorage.setItem('subscribe', this.state.subscribe);

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      subscribe: {
        [false]: () => 'false',
        [true]: () => 'true'
      },
      message: {
        forFirstName: '',
        forLastName: '',
        forEmail: '',
        forPassword: ''
      }
    })
  }


  render() {
    const { message } = this.state;

    if (this.state.registered !== 'true') {
      return (
        <form className={classNames(register_page_wrapper)}
          onSubmit={this.singUpClick}>

          <div className={classNames(head_wrapper)}>
            <div className={classNames(locked_wrapper)}>
              <Locked />
            </div>
            <p>Sign up</p>
          </div>
          <section className={classNames(names_wrapper)}>
            <div className={classNames(wrapper)}>
              <span
                className={classNames(for_checked, {
                  [error]: message.forFirstName,
                  [correct]: message.forFirstName === 'correct'
                })}>
                {message.forFirstName}
              </span>
              <input
                className={classNames(input, {
                  [error_border]: message.forFirstName,
                  [correct_border]: message.forFirstName === 'correct'
                })}
                name='firstName'
                type='text'
                placeholder='First Name *'
                value={this.state.firstName}
                onChange={this.handleInput}
              />
            </div>
            <div className={classNames(wrapper)}>
              <span
                className={classNames(for_checked, {
                  [error]: message.forLastName,
                  [correct]: message.forLastName === 'correct'
                })}>
                {message.forLastName}
              </span>
              <input className={classNames(input, {
                [error_border]: message.forLastName,
                [correct_border]: message.forLastName === 'correct'
              })}
                name='lastName'
                type='text'
                placeholder='Last Name *'
                value={this.state.lastName}
                onChange={this.handleInput}
              />
            </div>
          </section>
          <section className={classNames(login_wrapper)}>
            <div className={classNames(wrapper)}>
              <span
                className={classNames(for_checked, {
                  [error]: message.forEmail,
                  [correct]: message.forEmail === 'correct'
                })}>
                {message.forEmail}
              </span>

              <input
                className={classNames(input, {
                  [error_border]: message.forEmail,
                  [correct_border]: message.forEmail === 'correct'
                })}
                name='email'
                type='email'
                placeholder='Email Address *'
                value={this.state.email}
                onChange={this.handleInput}
              />
            </div>

            <div className={classNames(wrapper)}>
              <span
                className={classNames(for_checked, {
                  [error]: message.forPassword,
                  [correct]: message.forPassword === 'correct'
                })}>
                {message.forPassword}
              </span>
              <input
                className={classNames(input, {
                  [error_border]: message.forPassword,
                  [correct_border]: message.forPassword === 'correct'
                })}
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
                onClick={this.subscribeClick}
              />
              <span className={classNames(text_for_checkbox)}>
                I want to receive inspiration, marketing promotions and updates via email.
            </span>
            </div>
          </section>
          <button
            className={classNames(submit_btn)}
            disabled={
              message.forFirstName === 'correct' &&
                message.forLastName === 'correct' &&
                message.forEmail === 'correct' &&
                message.forPassword === 'correct'
                ? false : true
            }
            type='submit'>sign up</button>
          <Link className={classNames(link_item)} to={'/adv_hw22'}>Already have an account? Sign in</Link>
          <small className={(footer)}>Copyright &copy; Your Website 2020.</small>
        </form>
      )
    } else {
      return (
        <div className={classNames(wrapper)}>
          <Checked />
          <Link className={classNames(redy_to_loggined)} to={'/adv_hw22'}>Registration is successful, you can <i>log&#160;in</i></Link>
        </div>)
    }
  }
}

export default RegisterPage;