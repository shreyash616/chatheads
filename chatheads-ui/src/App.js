import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import appConstants from './common/constants/appConstants'

//common components
import NavBar from './common/components/navigation-bar/index'

function App() {

  const [colorMode, setColorMode] = useState('dark')

  const commonProps = {
    setColorMode
  }

  return (
    <React.Fragment>
      <NavBar 
        title={appConstants.navBarTitle} 
        colorMode={colorMode}
        {...commonProps}
        />
      <Router>
        <Switch>
          <Route key='signIn' path='/signIn'/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
