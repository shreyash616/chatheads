import React from 'react'
import {} from "react-router-dom";
import Button from '../button/index'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
    StyledNavbar,
    NavbarBrand,
    ActionButtons,
    Divider,
    ThemeName,
    ActionButtonsWrapper,
    SwitchWrapper
} from './styles'
import styleVals from '../../styleVals/global'
import {withStyles} from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import appConstants from '../../constants/appConstants'

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

  const goToHome = () => {
    props.history.push('/home')
  }
    return (        
    <StyledNavbar {...props}>            
    <NavbarBrand onClick={goToHome}  {...props}>{props.title}</NavbarBrand>
    <ActionButtons>
      <ActionButtonsWrapper>
        <Link to='/signIn'>
          <Button disabled={!props.signInRoute} {...props}>
            {appConstants.SIGN_IN}                  
          </Button>
        </Link>
      </ActionButtonsWrapper>
      <ActionButtonsWrapper>
        <Link to='/signUp'>
          <Button disabled={!props.signUpRoute} {...props}>
            {appConstants.SIGN_UP}                                   
          </Button>
        </Link>
      </ActionButtonsWrapper>
    </ActionButtons>
    <Divider {...props}>
      |
    </Divider>
    <SwitchWrapper>
    <FormGroup>
      <FormControlLabel
          control={
            <ThemeSwitch size='small' />
          }
          checked={props.theme === 'dark'}
          label={<ThemeName {...props}>{props.theme}</ThemeName>}
          onChange = {props.switchTheme}
        />
      </FormGroup>
    </SwitchWrapper>
    </StyledNavbar>        
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