import React, {useState} from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
import signInConstants from '../../common/constants/signInConstants'
import { 
    PageWrapper,      
    LoginWrapper,
    UsernameWrapper,
    PasswordWrapper,
    SignInButtonWrapper
} from "./styles";

const SignIn = (props) =>{
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
            <SignInButtonWrapper {...props}>
              {signInConstants.SIGN_IN}
            </SignInButtonWrapper>
          </LoginWrapper>
        </PageWrapper>
      </PageContainer>
    )
}
export default SignIn