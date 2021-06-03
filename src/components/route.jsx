import { useContext } from 'react';
import { Route as ReactRoute, Redirect } from 'react-router-dom';
import { Store } from '../App';

export const Route = ({ component: Component, isPrivate, ...props }) => {
  const { state: {
    isAuthenticated
  } } = useContext(Store);
  return (
    <ReactRoute
      render={() => {
        if (isPrivate && !isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/adv_hw22/restricted',
                state: { from: window.location.pathname }
              }}
            />
          )
        }
        return <Component {...props} />
      }} {...props}
    />
  );
}