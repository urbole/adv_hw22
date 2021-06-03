import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import classNames from 'classnames';
import {
  navigation, header_logo_img, navigation_menu, navigation_item
} from './components.module.css';


export const Navigation = ({ links }) => (
  <header className={classNames(navigation)}>
    <img className={classNames(header_logo_img)} src={logo} aria-hidden="true" alt="" />
    <ul className={classNames(navigation_menu)}>
      {links.map(link => (
        <li className={classNames(navigation_item)} key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </header>
)