import React, {useState} from 'react'
import Switch from '@material-ui/core/Switch'
import styleVals from '../../styleVals/global'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {
    InputTextWrapper,
    StyledTextInput,
    Label,
    Starred,    
    ShowPasswordToggleSwitchWrapper,
    PasswordInputWithToggleSwitch,
    PasswordWrapper    
} from './styles'
import { red } from '@material-ui/core/colors'

const navbarMaterialStyle = {
    switchBase: {
      color: styleVals.color.ogBlue,      
      '&$checked': {
        color: styleVals.color.red,
      },
      '&$checked + $track': {
        backgroundColor: styleVals.color.red,
      },
    },
    checked: {},
    track: {},
  }
  
const ShowPasswordToggleSwitch = withStyles(navbarMaterialStyle)(Switch)

const TextInput = (props) => { 
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }  
    return (
        <React.Fragment>
            <InputTextWrapper>  
            <Label {...props}>{props.label}{props.requiredField && <Starred>*</Starred>}</Label>
            {props.isPassword
            ?<PasswordWrapper>
                <PasswordInputWithToggleSwitch
                 {...props}
                 type={showPassword?'password':'text'}
                />
                <ShowPasswordToggleSwitchWrapper>
                  <ShowPasswordToggleSwitch
                    size='small'                    
                    checked={showPassword}
                    onChange={toggleShowPassword}
                  />
                </ShowPasswordToggleSwitchWrapper>
            </PasswordWrapper>
            : <StyledTextInput
                {...props}
                type={props.isPassword?showPassword?props.type:'password':props.type}              
                value={props.value}           
              />
            }         
            </InputTextWrapper>
        </React.Fragment>

    )
}

TextInput.propTypes = {
    label: PropTypes.string,    
    type: PropTypes.string,    
    disabled: PropTypes.bool,
    requiredField: PropTypes.bool,    
    onChange: PropTypes.func,
    isPassword: PropTypes.bool    
}

TextInput.defaultProps = {
    type: 'text',    
    disabled: false,
    requiredField: false,
    isPassword: false    
}

export default TextInput