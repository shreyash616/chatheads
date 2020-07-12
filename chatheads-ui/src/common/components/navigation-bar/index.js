import React, {useState, useEffect} from 'react'
import Button from '../button/index'
import PropTypes from 'prop-types'
import {
    Navbar,
    NavbarBrand,
    ActionButtons
} from './styles'
import styleVals from '../../styleVals/global'

const AppNavbar = (props) => {

    return (        
    <Navbar {...props}>            
    <NavbarBrand {...props}>{props.title}</NavbarBrand>
    <ActionButtons>
        <Button {...props}>
          Log In                  
        </Button>
        <Button {...props}>
          Sign Up                  
        </Button>
    </ActionButtons>
    </Navbar>        
    )
}

AppNavbar.defaultProps = {
    theme: styleVals.color.dark,
    brandLink: '#'
}

AppNavbar.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.string,
    brandLink: PropTypes.string
}

export default AppNavbar