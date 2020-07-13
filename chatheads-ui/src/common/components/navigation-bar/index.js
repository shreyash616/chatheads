import React, {useState, useEffect} from 'react'
import Button from '../button/index'
import PropTypes from 'prop-types'
import {
    Navbar,
    NavbarBrand,
    ActionButtons
} from './styles'
import styleVals from '../../styleVals/global'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    <FormGroup>
    <FormControlLabel
        control={
          <Switch />
        }
        label="Mode"
      />
    </FormGroup>
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