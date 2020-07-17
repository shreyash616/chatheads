import React from 'react'
import {
    StyledFooter,
    FooterContent
} from './styles'

const Footer = (props) => {
    console.log(props)
    return (        
      <StyledFooter {...props}>
        <FooterContent>
            
        </FooterContent>
      </StyledFooter>        
    )
}

export default Footer