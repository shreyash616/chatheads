import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    NavBar,
    NavBarWrapper
} from './styles'
// import icon from '../../../chatheads.ico'

const AppNavBar = (props) => {
    return (
        <NavBarWrapper>
            <NavBar                
                colorMode={props.colorMode}
            >
                {/* <img src={icon}></img> */}
                {props.title}
            </NavBar>
        </NavBarWrapper>
    )
}

AppNavBar.propTypes = {
    title: PropTypes.string,
    colorMode: PropTypes.string
}

export default AppNavBar