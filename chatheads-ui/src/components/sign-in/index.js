import React, {useState} from "react";
import PageContainer from '../../common/components/page-container/index'
import TextInput from '../../common/components/text-input'
import { 
    PageWrapper,      
    LoginWrapper
} from "./styles";

const SignIn = (props) =>{

    return (
        <PageContainer {...props}>
          <PageWrapper {...props}>
            <LoginWrapper {...props}>   
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
            </LoginWrapper>
          </PageWrapper>
        </PageContainer>
    )
}
export default SignIn