import React, { useEffect } from "react";
import {connect} from 'react-redux'

import signInConstants from '../../common/constants/signInConstants'
import actions from '../../redux/actions/index'

import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"

import { 
    PageWrapper,      
    LoginWrapper,
    UsernameWrapper,
    PasswordWrapper,
    SignInButtonWrapper
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

  //useEffects
  useEffect(()=> {
    console.log(props.signInData)
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
    <PageContainer {...props}>
      <PageWrapper {...props}>
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
      </PageWrapper>
    </PageContainer>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)