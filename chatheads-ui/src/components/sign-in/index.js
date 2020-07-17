import React, {useState} from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
import { 
    PageWrapper,      
    LoginWrapper,
    InputFieldsWrapper,
    SignInButtonWrapper
} from "./styles";

const SignIn = (props) =>{
    return (
<<<<<<< HEAD
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
                isPassword={true}                
              />
            </InputFieldsWrapper>
            <SignInButtonWrapper>
              Sign In
            </SignInButtonWrapper>
          </LoginWrapper>
        </PageWrapper>
      </PageContainer>
=======
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
>>>>>>> b137cf306937210d292f9d315989cac9a20d4a0a
    )
}
export default SignIn