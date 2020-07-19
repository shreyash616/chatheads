import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'

import signInConstants from '../../common/constants/signInConstants'
import actions from '../../redux/actions/index'
import styleVals from '../../common/styleVals/global'
import {withStyles} from '@material-ui/core/styles'

import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"

import { 
    PageWrapper,      
    AlertWithLoginWrapper,
    LoginWrapper,
    UsernameWrapper,
    PasswordWrapper,
    SignInButtonWrapper,
    Loader
} from "./styles";
import AlertBox from "../../common/components/alert-box";

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
  const [alert, triggerAlert] = useState({
    showAlert: false,
    data: ''
  })

  const [showLoader, setShowLoader] = useState(false)

  //useEffects
  useEffect(()=> {
    console.log(props.signInData)
    if(props.signInData.data){
      if(props.signInData.error){
        triggerAlert({
          showAlert: true,
          data: props.signInData.data.data?props.signInData.data.data:props.signInData.data
        })
      }
    }
  },[props.signInData])

  useEffect(()=>{
    setShowLoader(props.signInData.loading)
  },[props.signInData])
  
  //functionality
  const handleSignIn = () => {
    let signInDetails = {
      jwtToken: 'bxc',
      data: {
        userId: 'Ankit616',
        password: '12345'
      }
    }
    props.initiateSignIn(signInDetails)
  }

  return (
    <React.Fragment>
      <PageContainer {...props}>
        <PageWrapper {...props}>
          <AlertWithLoginWrapper>
            {alert.showAlert?
            <AlertBox theme={props.theme}>{alert.data}</AlertBox>:null}
            {showLoader && <AppLoader color='primary' theme={props.theme}/>}
            <LoginWrapper {...props}>   
                <UsernameWrapper>
                  <TextInput
                    {...props}
                    label={signInConstants.USERNAME}
                    requiredField={true}                               
                  />
                </UsernameWrapper>
                <PasswordWrapper>
                  <TextInput
                    {...props}
                    label={signInConstants.PASSWORD}
                    requiredField={true}
                    isPassword={true}                
                  /> 
                </PasswordWrapper>            
              <SignInButtonWrapper
                onClick={handleSignIn}
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