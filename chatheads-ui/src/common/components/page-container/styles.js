import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const Divider = styled.div`
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
`

export const Container = styled.div`
    background-color: ${props=>props.theme==='dark'?styleVals.color.dark:styleVals.color.light};
    height: 100vh;
`

export const ContentContainer = styled.div`    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    margin-top: ${styleVals.dimensions.spacing10};
    min-height: 70vh;
`
