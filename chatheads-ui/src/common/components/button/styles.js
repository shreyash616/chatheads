import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledButton = styled.button`
    padding: ${styleVals.dimensions.spacing6};
    font-family: ${styleVals.fonts.wordFont};
    font-size: ${styleVals.dimensions.spacing18};
    border: ${styleVals.dimensions.spacing4};
    border-radius: ${styleVals.dimensions.spacing4};
    background-color: ${props => props.theme === 'dark'? styleVals.color.bestOrange : styleVals.color.ogBlue};
    background-color: ${props => props.theme === 'dark'? styleVals.color.bestOrange : styleVals.color.ogBlue};
    &: hover {
        background-color: ${props => props.theme === 'dark'? styleVals.color.dullOrange : styleVals.color.dullBlue};
    }
    
`