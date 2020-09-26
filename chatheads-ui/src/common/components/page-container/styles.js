import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const Content = styled.div`
    margin-bottom: ${styleVals.dimensions.spacing100};    
    width: auto;
    display: flex;      
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    min-height: 70vh;   
    box-shadow: ${styleVals.color.shadowColor};
`
