import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const P = styled.p`
    font-weight: ${props => props.bold?'bold':'normal'}
    font-family: ${styleVals.fonts.wordFont};    
`
export const H1 = styled.h1`    
    font-family: ${styleVals.fonts.wordFont};
    color: ${styleVals.color.ogBlue};
    line-height: 0.8em;
    margin-top: 0px;    
`