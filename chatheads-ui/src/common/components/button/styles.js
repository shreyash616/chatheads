import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledButton = styled.button`    
    padding: ${styleVals.dimensions.spacing6};
    font-family: ${styleVals.fonts.wordFont};
    font-size: ${styleVals.dimensions.spacing18};
    border: ${styleVals.dimensions.spacing4};
    border-radius: ${styleVals.dimensions.spacing4};
    color: ${props => props.theme === 'dark'?styleVals.color.dark:styleVals.color.light};
    background-color: ${props => props.theme === 'dark'? props.disabled?styleVals.color.dullOrange:styleVals.color.bestOrange :props.disabled? styleVals.color.dullBlue:styleVals.color.ogBlue};
    outline: none;    
    &: hover {
        background-color: ${props => props.theme === 'dark'? styleVals.color.dullOrange : styleVals.color.dullBlue};
    } 
    &: hover{
        cursor: pointer;        
    }
`