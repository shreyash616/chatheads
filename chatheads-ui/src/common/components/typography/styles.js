import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledP = styled.p`
    font-weight: ${props => props.bold?'bold':'normal'}
    font-family: ${styleVals.fonts.wordFont};
    transition: 1s all linear;
`