import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const Divider = styled.div`    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    box-shadow: ${styleVals.color.shadowColor};
`
export const Container = styled.div`
    background-color: ${props=>props.theme==='dark'?styleVals.color.dark:styleVals.color.light};     
    padding: ${styleVals.dimensions.spacing20}; 
    min-height: 100vh;  
`
export const Content = styled.div`    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    margin-left: ${styleVals.dimensions.spacing36};
    margin-right: ${styleVals.dimensions.spacing36};
    margin-top: ${styleVals.dimensions.spacing20};
    border-radius: ${styleVals.dimensions.spacing10};
    min-height: 75vh;   
    box-shadow: ${styleVals.color.shadowColor};
`
