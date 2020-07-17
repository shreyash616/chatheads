import React, {useState} from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from '../../common/components/text-input'
import { 
    PageWrapper,      
    LoginWrapper,
    InputFieldsWrapper,
    SignInButtonWrapper
} from "./styles";

const SignIn = (props) =>{

    return (
        <PageContainer {...props}>
          <PageWrapper {...props}>
            <LoginWrapper {...props}>   
              <InputFieldsWrapper>
                <TextInput
                  {...props}
                  label={'Username'}
                  requiredField={true}                                
                />
                <TextInput
                  {...props}
                  label={'Password'}
                  requiredField={true}                
                />
              </InputFieldsWrapper>
              <SignInButtonWrapper {...props}>
                Sign In
              </SignInButtonWrapper>
            </LoginWrapper>
          </PageWrapper>
        </PageContainer>
    )
}
export default SignIn