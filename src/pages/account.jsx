import { useHistory } from "react-router";
import { Store } from "../App";
import { useContext } from "react";
import Title from "../components/title";
import Button from '../components/button'

export const AccountPage = () => {
  const {
    actions: {
      logoutUser
    }
  } = useContext(Store);

  const history = useHistory();
  const handelClick = () => {

    try {
      logoutUser();
      history.push('./');
    } catch (error) {
      alert('Smt goes wrong. You can not be logged out. Try again')
    }
  }

  return (
    <>
      <Title>Hello {localStorage.getItem('firstName')}!</Title>
      <Button onClick={handelClick}>log out</Button>
    </>
  );
}