import React from 'react'
import{
    Content
} from './styles'

const PageContainer = (props) => {  
    return (      
      <Content {...props}>
        {props.children}
      </Content>              
    )
}

export default PageContainer