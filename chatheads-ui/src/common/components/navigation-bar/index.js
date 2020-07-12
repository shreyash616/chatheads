import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    Navbar,
    NavbarWrapper,
    NavbarBrand
} from './styles'
import styleVals from '../../styleVals/global'

const AppNavbar = (props) => {

    return (
        <NavbarWrapper>
          <Navbar {...props}>            
            <NavbarBrand {...props}>{props.title}</NavbarBrand>
            {/* <Actions>              
            </Actions> */}
          </Navbar>
        </NavbarWrapper>
    )
}

AppNavbar.defaultProps = {
    colorMode: styleVals.color.dark,
    brandLink: '#'
}

AppNavbar.propTypes = {
    title: PropTypes.string,
    colorMode: PropTypes.string,
    brandLink: PropTypes.string
}

export default AppNavbar