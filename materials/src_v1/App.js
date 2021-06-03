import {Route, Switch} from 'react-router-dom';
// import { NavBar } from './components/navBar';
import { appRoutes } from './routes/index';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app_wrapper df fd_c">
      {/* <header className="app_header">
        <NavBar />
      </header> */}
      <div className="app_content">
        <Switch>
          {appRoutes.map(route => (<Route key={route.path} {...route} />))}
          <Route path='*'>
            <p>404: No Page Found</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
