import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'

import signInConstants from '../../common/constants/signInConstants'
import actions from '../../redux/actions/index'
import styleVals from '../../common/styleVals/global'
import {withStyles} from '@material-ui/core/styles'

import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
import AlertBox from "../../common/components/alert-box";

import { 
    PageWrapper,      
    AlertWithLoginWrapper,
    LoginWrapper,
    UsernameWrapper,
    PasswordWrapper,
    SignInButtonWrapper,
    Loader
} from "./styles";

const mapStateToProps = store => {
  return {
    signInData: store.signIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initiateSignIn: (signInDetails) => dispatch(actions.signInActions.initiateSignIn(signInDetails))
  }
}

const SignIn = (props) =>{

  const loaderStyle = {
    colorPrimary: props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue
  }
  const AppLoader = withStyles(loaderStyle)(Loader)

  //useState
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showLoader, setShowLoader] = useState(false)
  const [alert, setAlert] = useState({
    showAlert: false,
    message: ''
  })

  //useEffects
  useEffect(()=>{
    console.log(props.signInData)
    if(props.signInData.loading){
      setShowLoader(true)
    }
    else{
      setShowLoader(false)
    }
  },[props.signInData])

  useEffect(()=>{
    if(props.signInData.data){
      if(props.signInData.error){
        if(props.signInData.data.data){
          setAlert({
            showAlert:true,
            message: props.signInData.data.data
          })

        }
        else{
          setAlert({
            showAlert:true,
            message: props.signInData.data
          })
        }
      }
    }
  },[props.signInData])

  
  //functionality
  const handleUsername = (event) => {    
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleSignIn = () => {
    let signInDetails = {
      jwtToken: 'bxc',
      data: {
        userId: username,
        password
      }
    }
    props.initiateSignIn(signInDetails)
  }


  return (
    <React.Fragment>      
      <PageContainer {...props}>
        <PageWrapper {...props}>
          <AlertWithLoginWrapper>
            {alert.showAlert && <AlertBox>{alert.message}</AlertBox>}
            {showLoader && <AppLoader theme={props.theme}/>} 
            <LoginWrapper {...props}>   
                <UsernameWrapper>
                  <TextInput
                    {...props}
                    value={username}
                    label={signInConstants.USERNAME}
                    requiredField={true}
                    onChange={handleUsername}                                                 
                  />
                </UsernameWrapper>
                <PasswordWrapper>
                  <TextInput
                    {...props}    
                    value={password}                
                    label={signInConstants.PASSWORD}
                    requiredField={true}
                    isPassword={true}
                    onChange={handlePassword}                
                  /> 
                </PasswordWrapper>            
              <SignInButtonWrapper
                onClick= {handleSignIn}
                {...props}
              >
                {signInConstants.SIGN_IN}
              </SignInButtonWrapper>              
            </LoginWrapper>
          </AlertWithLoginWrapper>
        </PageWrapper>
      </PageContainer>
    </React.Fragment>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)