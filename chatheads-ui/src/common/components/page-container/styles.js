import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const Content = styled.div`    
    margin-bottom: ${styleVals.dimensions.spacing80};
    border-radius: ${styleVals.dimensions.spacing10};
    min-height: 50vh;   
    box-shadow: ${styleVals.color.shadowColor}; 
    padding: ${props => props.noPadding ? styleVals.dimensions.spacing8 : styleVals.dimensions.spacing40};   
`
