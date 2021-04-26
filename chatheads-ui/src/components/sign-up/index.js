import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'

import signUpConstants from '../../common/constants/signUpConstants'
import actions from '../../redux/actions/index'
import styleVals from '../../common/styleVals/global'
import {withStyles} from '@material-ui/core/styles'
import homeConstants from '../../common/constants/homeConstants'

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
    Loader,
    LogoWrapper,
    Logo,
    Slogan,
    AlertWrapper
} from "./styles";

const mapStateToProps = store => {
  return {
    signUpData: store.signUp,
    homeData: store.homeData,
    signInData: store.signIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initiateSignUp: (signUpDetails) => dispatch(actions.signUpActions.initiateSignUp(signUpDetails)),
    getJwtToken: () => dispatch(actions.homeActions.getJwtToken())
  }
}

const SignUp = (props) => {

  const loaderStyle = {
    colorPrimary: props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue
  }
  
  const AppLoader = withStyles(loaderStyle)(Loader)
    
  const [error, setError] = useState({
    isAlert: false,
    message: ''
  })

  //useState
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showLoader, setShowLoader] = useState(false)
  const [showJwtLoader, setShowJwtLoader] = useState(false)
  const [alert, setAlert] = useState({
    showAlert: false,
    message: ''
  })

  //useEffects

  useEffect(()=>{      
    props.getJwtToken()      
  }, [])

  useEffect(()=>{
    if(props.homeData.loading){
      setShowJwtLoader(true)
    }else{
      setShowJwtLoader(false)
    }
  },[props.homeData])

  useEffect(()=>{
    if(props.homeData.status==='failure'){
      if(props.homeData.data.data){
        setError({
          isAlert: true,
          message: props.homeData.data.data
        })
      } else{
        setError({
          isAlert: true,
          message: homeConstants.ERROR
        })
      }
    }
  },[props.homeData.status,props.homeData.data])  

  useEffect(()=>{    
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
          if(props.signUpData.data.data.message === 'Sign up successful.'){
            setTimeout(()=>{
              props.history.push('/signIn')
            },2000)
          }
        }
      }
    }
  },[props.signUpData,props.history])

  
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
  const handleSignUp = (e) => {
    e.preventDefault()
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

  const SignUpFields = <AlertWithLoginWrapper>
      {alert.showAlert && <AlertBox theme={props.theme}>{alert.message}</AlertBox>}
      {showLoader && <AppLoader theme={props.theme}/>} 
      <form onSubmit = {handleSignUp}>
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
          type='submit'                
          {...props}
          disabled={props.homeData.status==='failure' || !props.homeData.status}
        >
          {signUpConstants.SIGN_UP}
        </SignUpButtonWrapper>                            
      </LoginWrapper>
      </form>
    </AlertWithLoginWrapper>

  return (        
      <React.Fragment>
      {error.isAlert && <AlertWrapper><AlertBox theme={props.theme}>{error.message}</AlertBox></AlertWrapper>}    
      {showJwtLoader && <AppLoader theme={props.theme}/>}
      <PageContainer noPadding {...props}>
        <PageWrapper {...props}>          
          <LogoWrapper>
            <Logo theme = {props.theme}>{homeConstants.LOGO}</Logo>                
            <Slogan theme = {props.theme}>{homeConstants.SLOGAN_PART1}</Slogan>
            <Slogan theme = {props.theme}>{homeConstants.SLOGAN_PART2}</Slogan>
          </LogoWrapper>
          {SignUpFields}
        </PageWrapper>
      </PageContainer> 
      </React.Fragment>   
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)