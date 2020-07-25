import React from 'react'
import {
    StyledFooter,
    FooterContent
} from './styles'

const Footer = (props) => {    
    return (        
      <StyledFooter {...props}>
        <FooterContent>
          Copyright © 2020 Chatheads Ltd. All rights reserved.
        </FooterContent>
      </StyledFooter>        
    )
}

export default Footer