import React, {useState} from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
import { 
    PageWrapper,      
    LoginWrapper,
    InputFieldsWrapper,
    SignUpButtonWrapper
} from "./styles";

const SignUp = (props) =>{
    return (
        <PageContainer {...props}>
          <PageWrapper {...props}>
            <LoginWrapper {...props}>   
              <InputFieldsWrapper>
              <TextInput
                  {...props}
                  label={'Name'}
                  requiredField={true}                                
                />
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
                <TextInput
                  {...props}
                  label={'Phone Number'}
                  requiredField={true} 
                                 
                />
              </InputFieldsWrapper>
              <SignUpButtonWrapper>
                Sign Up
              </SignUpButtonWrapper>
            </LoginWrapper>
          </PageWrapper>
        </PageContainer>
    )
}
export default SignUp