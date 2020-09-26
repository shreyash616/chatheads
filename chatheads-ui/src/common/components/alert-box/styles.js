import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledAlertContainer = styled.div`
    width: auto;
    padding: ${styleVals.dimensions.spacing12};
    color: red;
    box-shadow: ${styleVals.color.shadowColor};
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    font-family: ${styleVals.fonts.wordFont};
    margin-bottom: ${styleVals.dimensions.spacing12};
    margin-top: ${styleVals.dimensions.spacing12}; 
`