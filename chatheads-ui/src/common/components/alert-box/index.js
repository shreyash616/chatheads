import React from 'react'
import {
    StyledAlertContainer
} from './styles'

const AlertBox = (props) => {
    return (
        <StyledAlertContainer {...props}>
            {props.children}
        </StyledAlertContainer>
    )
}

export default AlertBox