import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import {
    InputTextWrapper,
    StyledTextInput,
    Label,
    Starred,
    SwitchWrapper
} from './styles'


const TextInput = (props) => { 
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }  
    return (
        <React.Fragment>
            <InputTextWrapper>  
            <Label {...props}>{props.label}{props.requiredField && <Starred>*</Starred>}</Label>
            <StyledTextInput
              {...props}
              type={props.isPassword?showPassword?props.type:'password':props.type}
              value={props.isPassword?<Switch
                size='small'
                checked = {showPassword}
                onChange = {toggleShowPassword}
              />:props.value                            
              }           
            />            
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