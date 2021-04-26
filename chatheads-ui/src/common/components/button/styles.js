import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledButton = styled.button`    
    padding: ${styleVals.dimensions.spacing6};
    padding-left: ${styleVals.dimensions.spacing12};
    padding-right: ${styleVals.dimensions.spacing12};
    font-family: ${styleVals.fonts.wordFont};
    font-size: ${styleVals.dimensions.spacing18};
    font-weight: 600;
    border: 2px ${props => 
        props.appearance === 'primary'
        ?``
        : `solid ${props.theme === 'dark'? styleVals.color.bestOrange : styleVals.color.ogBlue}`
    };
    border-radius: ${styleVals.dimensions.spacing10};
    color: ${props => props.appearance === 'primary'?props.theme === 'dark'?styleVals.color.dark:styleVals.color.light:styleVals.color.dark};
    background-color: ${props =>
    props.appearance === 'primary'
        ?props.theme === 'dark'
            ?props.disabled
                ?styleVals.color.dullOrange
                :styleVals.color.bestOrange
            :props.disabled
                ?styleVals.color.dullBlue
                :styleVals.color.ogBlue
        :`#fff`};
    outline: none;    
    &: hover {
        background-color: ${props => props.theme === 'dark'? styleVals.color.dullOrange : styleVals.color.dullBlue};
    } 
    &: hover{
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};        
    }
    transition: all linear 0.1s;
`