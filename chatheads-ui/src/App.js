import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import appConstants from './common/constants/appConstants'

//common components
import NavBar from './common/components/navigation-bar/index'

function App() {

  const [theme, setTheme] = useState('light')

  const commonProps = {
    setTheme
  }

  return (
    <React.Fragment>
      <NavBar 
        title={appConstants.navBarTitle} 
        theme={theme}
        {...commonProps}
        />
      <Router>
        <Switch>
          <Route key='signUp' path='/signUp'/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
