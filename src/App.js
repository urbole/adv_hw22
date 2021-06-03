import { Switch } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { appRoutes } from './routes';
import React, { useCallback, useReducer } from 'react';
import { Route } from './components/route';
import classNames from 'classnames';
import './App.css';
import { content } from './pages/pages.module.css';

//TODO разобраться со стилями

export const Store = React.createContext({
  state: {},
  actions: {}
});

const initialState = {
  user: null,
  isAuthenticated: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state;
  }
}

const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = useCallback((user) => {
    dispatch({ type: 'LOGIN_USER', payload: user })
  }, []);

  const logoutUser = useCallback(() => {
    dispatch({ type: 'LOGOUT_USER', })
  }, []);

  return {
    state,
    actions: {
      loginUser,
      logoutUser
    }
  }
};

const links = [
  {
    to: '/adv_hw22',
    label: 'Home'
  },
  {
    to: '/adv_hw22/account',
    label: 'My Account'
  },
  {
    to: '/adv_hw22/loginpage',
    label: 'Log In'
  }
];

function App() {
  const store = useStore();
  return (
    <Store.Provider value={store}>
      <>
        <Navigation links={links} />
        <main className={classNames(content)}>
          <Switch>
            {appRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
            <Route path='*'>
              <p>404: No Page Found</p>
            </Route>
          </Switch>
        </main>
      </>
    </Store.Provider>
  );
}

export default App;