import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import appConstants from './common/constants/appConstants'
import styled from 'styled-components'
import styleVals from './common/styleVals/global'

//common components
import NavBar from './common/components/navigation-bar/index'
import Footer from './common/components/page-footer'

//components
import Home from './components/home/index'
import SignIn from './components/sign-in/index'
import SignUp from './components/sign-up/index'
import Chats from './components/chats'

const Divider = styled.div`    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    box-shadow: ${styleVals.color.shadowColor};
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props=>props.theme==='dark'?styleVals.color.dark:styleVals.color.light};      
    min-height: 80vh;
`
// //
// const f1 = state => {
//   return state[0]
// }

// const f1 = state => state[0]

const mapStateToProps = store => ({
  homeData: store.homeData
})


function App(props) {
  
  const [theme, setTheme] = useState('dark')
  const [signInRoute, setSignInRoute] = useState(false)
  const [signUpRoute, setSignUpRoute] = useState(false)

  useEffect(()=>{
    console.log(props.homeData)
    if(props.homeData.status === 'success'){
      setSignInRoute(true)
      setSignUpRoute(true)
    }
  },[props.homeData.status])
 
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
    title: appConstants.NAVBAR_BRAND,
    signInRoute,
    signUpRoute,
    history: props.history       
  }


  return (
    <React.Fragment>      
      <NavBar
        {...commonProps}
      />
      <Divider {...commonProps}/>
      <Container {...commonProps}>
        <Switch>
          <Route key='home' path='/home' render={()=><Home {...commonProps}/>}/>
          {signUpRoute && <Route key='signUp' path='/signUp' render={()=><SignUp {...commonProps}/>}/>}
          {signInRoute && <Route key='signIn' path='/signIn' render={()=><SignIn {...commonProps}/>}/>}
          <Route key='chats' path='/chats' render={()=><Chats {...commonProps}/>}/>
          <Redirect from='/' to='/home'/>          
        </Switch>      
        <Footer        
          {...commonProps}
        />
      </Container>                
    </React.Fragment>
  );
}

export default connect(mapStateToProps,null)(withRouter(App));
