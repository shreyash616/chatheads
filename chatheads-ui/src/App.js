import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import appConstants from './common/constants/appConstants'

//common components
import NavBar from './common/components/navigation-bar/index'

//components
import Home from './components/home/index'

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
    theme,
    switchTheme,
    title: appConstants.navBarTitle
  }

  return (
    <React.Fragment>
      <NavBar 
        {...commonProps}
      />      
        <Switch>
          <Route key='home' path='/home' render={()=><Home {...commonProps}/>}/>
          {/* <Route key='signUp' path='/signUp'/> */}
          <Redirect from='/' to='/home'/>          
        </Switch>
      
    </React.Fragment>
  );
}

export default App;
