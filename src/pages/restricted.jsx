import { Link } from "react-router-dom";
import classNames from 'classnames';
import { link_item, restricted } from './pages.module.css';
import Title from "../components/title";

export const NotAllowedPage = () => {

  return (
    <>
      <Title>You are not logged in!</Title>
      <p>Please <Link className={classNames(link_item, restricted)} to={'/adv_hw22/loginpage'}>LOG IN</Link> first!</p>
    </>
  )
};