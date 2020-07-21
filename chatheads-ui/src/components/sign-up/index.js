import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'

import signUpConstants from '../../common/constants/signUpConstants'
import actions from '../../redux/actions/index'
import styleVals from '../../common/styleVals/global'
import {withStyles} from '@material-ui/core/styles'

import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
import AlertBox from "../../common/components/alert-box";

import { 
    PageWrapper, 
    NameWrapper,
    PhoneNumberWrapper,     
    AlertWithLoginWrapper,
    LoginWrapper,
    UsernameWrapper,
    PasswordWrapper,
    SignUpButtonWrapper,
    Loader
} from "./styles";

const mapStateToProps = store => {
  return {
    signUpData: store.signUp,
    homeData: store.homeData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initiateSignUp: (signUpDetails) => dispatch(actions.signUpActions.initiateSignUp(signUpDetails))
  }
}

const SignUp = (props) =>{

  const loaderStyle = {
    colorPrimary: props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue
  }
  const AppLoader = withStyles(loaderStyle)(Loader)

  //useState
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showLoader, setShowLoader] = useState(false)
  const [alert, setAlert] = useState({
    showAlert: false,
    message: ''
  })

  //useEffects
  useEffect(()=>{
    console.log(props.signUpData)
    if(props.signUpData.loading){
      setShowLoader(true)
    }
    else{
      setShowLoader(false)
    }
  },[props.signUpData])

  useEffect(()=>{
    if(props.signUpData.data){
      if(props.signUpData.status === 'failure'){
        if(props.signUpData.data.data){
          setAlert({
            showAlert:true,
            message: props.signUpData.data.data
          })

        }
        else{
          setAlert({
            showAlert:true,
            message: props.signUpData.data
          })
        }
      }
      else{
        if(props.signUpData.data.data.message){
          setAlert({
            showAlert:true,
            message: props.signUpData.data.data.message
          })
        }
      }
    }
  },[props.signUpData])

  
  //functionality
  const handleUsername = (event) => {    
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }
  const handleSignUp = () => {
    let signUpDetails = {
      jwtToken: props.homeData.data ? props.homeData.data.data.jwtToken: null ,
      data: {
        userId: username,
        password,
        phoneNumber,
        name
      }
    }
    props.initiateSignUp(signUpDetails)
  }


  return (
    <React.Fragment>
      {console.log(props)}      
      <PageContainer {...props}>
        <PageWrapper {...props}>
          <AlertWithLoginWrapper>
            {alert.showAlert && <AlertBox theme={props.theme}>{alert.message}</AlertBox>}
            {showLoader && <AppLoader theme={props.theme}/>} 
            <LoginWrapper {...props}>
              <NameWrapper>
                <TextInput
                  {...props}    
                  value={name}                
                  label={signUpConstants.NAME}
                  requiredField={true}
                  isPassword={false}
                  onChange={handleName}                
                /> 
              </NameWrapper>   
              <PhoneNumberWrapper>
                  <TextInput
                    {...props}    
                    value={phoneNumber}                
                    label={signUpConstants.PHONE_NUMBER}
                    requiredField={true}
                    isPassword={false}
                    onChange={handlePhoneNumber}                
                  /> 
              </PhoneNumberWrapper>      
              <UsernameWrapper>
                <TextInput
                  {...props}
                  value={username}
                  label={signUpConstants.USERNAME}
                  requiredField={true}
                  onChange={handleUsername}                                                 
                />
              </UsernameWrapper>
              <PasswordWrapper>
                <TextInput
                  {...props}    
                  value={password}                
                  label={signUpConstants.PASSWORD}
                  requiredField={true}
                  isPassword={true}
                  onChange={handlePassword}                
                /> 
              </PasswordWrapper> 
                   
              <SignUpButtonWrapper
                onClick= {handleSignUp}
                {...props}
              >
                {signUpConstants.SIGN_UP}
              </SignUpButtonWrapper>              
            </LoginWrapper>
          </AlertWithLoginWrapper>
        </PageWrapper>
      </PageContainer>
    </React.Fragment>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)