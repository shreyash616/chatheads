import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
    InputTextWrapper,
    StyledTextInput,
    Label,
    Starred
} from './styles'

const TextInput = (props) => {    

    const [showPassword, setShowPassword] = useState(false)
        
    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
        <InputTextWrapper>          
          <Label {...props}>{props.label}{props.requiredField && <Starred>*</Starred>}</Label>
          <StyledTextInput
              {...props}
              type={showPassword?props.type:'password'}            
          />        
        </InputTextWrapper>
        // make a switch, checked = showPassword onChange={toggleShowPassword} 
    )
}

TextInput.propTypes = {
    label: PropTypes.string,    
    type: PropTypes.string,
    type: PropTypes,
    disabled: PropTypes.bool,
    requiredField: PropTypes.bool,    
    onChange: PropTypes.func    
}

TextInput.defaultProps = {
    type: 'text',    
    disabled: false,
    requiredField: false    
}

export default TextInput