import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import appConstants from './common/constants/appConstants'


//common components
import NavBar from './common/components/navigation-bar/index'
import Footer from './common/components/page-footer'

//components
import Home from './components/home/index'
import SignIn from './components/sign-in/index'
import SignUp from './components/sign-up/index'

function App() {

  const [theme, setTheme] = useState('dark')
 
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
    title: appConstants.NAVBAR_BRAND
  }

  return (
    <React.Fragment>
      <NavBar 
        {...commonProps}
      />      
        <Switch>
          <Route key='home' path='/home' render={()=><Home {...commonProps}/>}/>
          <Route key='signUp' path='/signUp' render={()=><SignUp {...commonProps}/>}/>
          <Route key='signIn' path='/signIn' render={()=><SignIn {...commonProps}/>}/>
          <Redirect from='/' to='/home'/>          
        </Switch>      
      <Footer        
        {...commonProps}
      />  
    </React.Fragment>
  );
}

export default App;
