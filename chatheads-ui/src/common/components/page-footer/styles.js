import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledFooter = styled.div`
    display: flex;    
    margin-top: auto;    
    background-color: ${props => props.theme === 'dark'?styleVals.color.bestOrange:styleVals.color.ogBlue}
`

export const FooterContent = styled.div`    
    padding: ${styleVals.dimensions.spacing30};
`