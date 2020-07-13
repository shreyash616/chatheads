import React from 'react'
import{
    Container,
    Page
} from './styles'

const PageContainer = (props) => {
    return (
      <Page {...props}>
        <Container {...props}>
          {props.children}
        </Container>
      </Page>
    )
}

export default PageContainer