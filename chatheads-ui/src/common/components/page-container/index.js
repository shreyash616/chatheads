import React from 'react'
import{
    Divider,
    Container,
    Content
} from './styles'

const PageContainer = (props) => {  
    return (
      <React.Fragment>
        <Divider theme={props.theme}></Divider>
        <Container {...props}>
          <Content {...props}>
            {props.children}
          </Content>
        </Container>
      </React.Fragment>
    )
}

export default PageContainer