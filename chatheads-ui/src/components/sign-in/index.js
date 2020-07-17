import React, {useState} from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
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
                  label={'Username'}
                  requiredField={true}                               
                />
              </UsernameWrapper>
              <PasswordWrapper>
                <TextInput
                  {...props}
                  label={'Password'}
                  requiredField={true}
                  isPassword={true}                
                /> 
              </PasswordWrapper>            
            <SignInButtonWrapper {...props}>
              Sign In
            </SignInButtonWrapper>
          </LoginWrapper>
        </PageWrapper>
      </PageContainer>
    )
}
export default SignIn