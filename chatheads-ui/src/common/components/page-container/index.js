import React from 'react'
import{
    Content
} from './styles'

const PageContainer = (props) => {  
    return (
      <React.Fragment>
          <Content {...props}>
            {props.children}
          </Content>        
      </React.Fragment>
    )
}

export default PageContainer