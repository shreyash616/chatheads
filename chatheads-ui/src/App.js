import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import appConstants from './common/constants/appConstants'

//common components
import NavBar from './common/components/navigation-bar/index'

function App() {

  const [theme, setTheme] = useState('light')
 
  const switchTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
    } else{
      setTheme('light')
    }

  }

  const commonProps = {
    switchTheme,
    title: appConstants.navBarTitle,
    theme
  }

  return (
    <React.Fragment>
      <NavBar 
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
