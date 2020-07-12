import React from 'react'
import styleVals from '../../styleVals/global'
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
    type: 'primary',
    theme: 'dark',
    onClick: null
}

Button.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.string,
    onClick: PropTypes.func
}

export default Button

