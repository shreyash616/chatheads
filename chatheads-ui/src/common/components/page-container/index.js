import React from 'react'
import{
    Divider,
    Container,
    ContentContainer
} from './styles'

const PageContainer = (props) => {
    return (
      <React.Fragment>
        <Divider {...props}></Divider>
        <Container {...props}>
          <ContentContainer>
            {props.children}
          </ContentContainer>
        </Container>
      </React.Fragment>
    )
}

export default PageContainer