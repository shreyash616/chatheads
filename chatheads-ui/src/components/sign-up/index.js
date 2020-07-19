import React from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from "../../common/components/text-input/index"
import signUpConstants from '../../common/constants/signUpConstants'
import { 
    PageWrapper,      
    LoginWrapper,
    UsernameWrapper,
    PasswordWrapper,
    SignUpButtonWrapper,
    NameWrapper,
    PhoneNumberWrapper
} from "./styles";

const SignUp = (props) =>{
    return (
      <PageContainer {...props}>
        <PageWrapper {...props}>
          <LoginWrapper {...props}>   
              <NameWrapper>
                <TextInput
                  {...props}
                  label={signUpConstants.NAME}
                  requiredField={true}  
                />
              </NameWrapper>
              <PhoneNumberWrapper>
                <TextInput
                  {...props}
                  label={signUpConstants.PHONE_NUMBER}
                  requiredField={true}
                  />
              </PhoneNumberWrapper>
              <UsernameWrapper>
                <TextInput
                  {...props}
                  label={signUpConstants.USERNAME}
                  requiredField={true}                               
                />
              </UsernameWrapper>
              <PasswordWrapper>
                <TextInput
                  {...props}
                  label={signUpConstants.PASSWORD}
                  requiredField={true}
                  isPassword={true}                
                /> 
              </PasswordWrapper>            
            <SignUpButtonWrapper {...props}>
              {signUpConstants.SIGN_UP}
            </SignUpButtonWrapper>
          </LoginWrapper>
        </PageWrapper>
      </PageContainer>
    )
}
export default SignUp