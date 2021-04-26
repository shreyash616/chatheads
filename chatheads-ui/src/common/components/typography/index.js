import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const P = styled.p`
    font-weight: ${props => props.bold?'bold':'normal'}
    font-family: ${styleVals.fonts.wordFont};    
`
export const H1 = styled.h1`    
    font-family: ${styleVals.fonts.wordFont};
    color: ${props => props.theme === 'dark' ? styleVals.color.bestOrange : styleVals.color.ogBlue};
    line-height: 1.2em;
    margin-top: 0px;    
`