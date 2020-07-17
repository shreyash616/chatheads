import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const InputTextWrapper = styled.div`
    display: flex;    
    flex-direction: column;    
    margin-top: ${styleVals.dimensions.spacing24};
    margin-bottom: ${styleVals.dimensions.spacing24};
`
export const Label = styled.span`
    font-family: ${styleVals.fonts.wordFont};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-size: ${styleVals.dimensions.spacing16};
    margin-bottom: ${styleVals.dimensions.spacing12};
`
export const Starred = styled.sup`
    color: red;
    font-size: ${styleVals.dimensions.spacing16};
`

export const StyledTextInput = styled.input`
    font-family: ${styleVals.fonts.wordFont};
    font-weight: bold;
    padding: ${styleVals.dimensions.spacing12};
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing8};
`