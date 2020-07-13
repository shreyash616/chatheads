import React from 'react'
import Button from '../button/index'
import PropTypes from 'prop-types'
import {
    Navbar,
    NavbarBrand,
    ActionButtons,
    Divider,
    ThemeName
} from './styles'
import styleVals from '../../styleVals/global'
import {withStyles} from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const navbarMaterialStyle = {
  switchBase: {
    color: styleVals.color.ogBlue,
    '&$checked': {
      color: styleVals.color.bestOrange,
    },
    '&$checked + $track': {
      backgroundColor: styleVals.color.bestOrange,
    },
  },
  checked: {},
  track: {},
}

const ThemeSwitch = withStyles(navbarMaterialStyle)(Switch)

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
    <Divider {...props}>
      |
    </Divider>
    <FormGroup>
    <FormControlLabel
        control={
          <ThemeSwitch />
        }
        label={<ThemeName {...props}>{props.theme}</ThemeName>}
        onChange = {props.switchTheme}
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