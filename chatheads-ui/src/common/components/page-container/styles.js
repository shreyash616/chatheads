import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const Divider = styled.div`    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    box-shadow: ${styleVals.color.shadowColor};
`
export const Container = styled.div`
    display: flex;
    background-color: ${props=>props.theme==='dark'?styleVals.color.dark:styleVals.color.light};      
    min-height: 80vh;
`
export const Content = styled.div`
    margin: ${styleVals.dimensions.spacing40};
    margin-bottom: ${styleVals.dimensions.spacing80};
    width: 100%;
    display: flex;      
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    min-height: 70vh;   
    box-shadow: ${styleVals.color.shadowColor};
`
