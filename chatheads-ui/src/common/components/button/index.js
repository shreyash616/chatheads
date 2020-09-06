import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledButton
} from './styles'

const Button = (props) => {

    return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
    )
}

Button.defaultProps = {    
    theme: 'dark',
    onClick: null,
    disabled: false
}

Button.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button

