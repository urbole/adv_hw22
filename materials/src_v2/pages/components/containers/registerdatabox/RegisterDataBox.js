import classNames from "classnames";
import { Component } from "react";
import {
  register_data_wrapper, names_wrapper, login_wrapper,
  input, check_box_wrapper, text_for_checkbox, error,
  error_border, correct_border, correct, wrapper, for_checked
} from './RegisterDataBox.module.css';

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   Object.values(rest).forEach(val => {
//     val === null && (valid = false)
//   });

//   return valid;
// }

class RegisterDataBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      checked: false,
      message: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   if (formValid(this.state)) {
  //     console.log(`
  //     --Submitting--
  //     First Name: ${this.state.firstName}
  //     Last Name: ${this.state.lastName}
  //     Email: ${this.state.email}
  //     Password: ${this.state.password}
  //     Checked: ${this.state.checked}`)
  //   } else {
  //     console.log('Form invalid - display error message')
  //   }
  // }

  handleInput = e => {
    e.preventDefault();

    const { name, value, type, checked } = e.target;
    let message = this.state.message;

    switch (name) {
      case 'firstName': message.firstName = value.length < 3 ? 'minimum 3 characters required' : 'correct';
        break;
      case 'lastName': message.lastName = value.length < 3 ? 'minimum 3 characters required' : 'correct';
        break;
      case 'email': message.email = emailRegex.test(value) ? 'correct' : 'invalid email address';
        break;
      case 'password': message.password = value.length < 8 ? 'minimum 8 characters required' : 'correct';
        break;
      default:
        break;
    }

    const value_ = type === 'checkbox' ? checked : value;

    this.setState({ message, [name]: value_ }, () => console.log(this.state));
    localStorage.setItem(name, value_);
  }

  render() {
    const { message } = this.state;
    return (
      <div className={classNames(register_data_wrapper)}>
        <section className={classNames(names_wrapper)}>
          <div className={classNames(wrapper)}>
            <span className={classNames(for_checked, {
              [error]: message.firstName,
              [correct]: message.firstName === 'correct'
            })}>{message.firstName}</span>
            <input className={classNames(input, {
              [error_border]: message.firstName,
              [correct_border]: message.firstName === 'correct'
            })}
              name='firstName'
              type='text'
              placeholder='First Name *'
              value={this.state.firstName}
              onChange={this.handleInput}
            />
          </div>
          <div className={classNames(wrapper)}>
            <span className={classNames(for_checked, {
              [error]: message.lastName,
              [correct]: message.lastName === 'correct'
            })}>{message.lastName}</span>
            <input className={classNames(input, {
              [error_border]: message.lastName,
              [correct_border]: message.lastName === 'correct'
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
            <span className={classNames(for_checked, {
              [error]: message.email,
              [correct]: message.email === 'correct'
            })}>{message.email}</span>
            <input className={classNames(input, {
              [error_border]: message.email,
              [correct_border]: message.email === 'correct'
            })}
              name='email'
              type='email'
              placeholder='Email Address *'
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className={classNames(wrapper)}>
            <span className={classNames(for_checked, {
              [error]: message.password,
              [correct]: message.password === 'correct'
            })}>{message.password}</span>
            <input className={classNames(input, {
              [error_border]: message.password,
              [correct_border]: message.password === 'correct'
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
              name="checked"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleInput}
            />
            <span className={classNames(text_for_checkbox)}>
              I want to receive inspiration, marketing promotions and updates via email.
              </span>
          </div>
        </section>
      </div>
    )
  }
}

export default RegisterDataBox;