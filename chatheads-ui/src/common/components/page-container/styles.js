import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const Page = styled.div`
    min-height: 88.8vh;
    background-color: ${props=>props.theme==='dark'?styleVals.color.dark:styleVals.color.light}; 
    transition: 0.5s all linear;
`

export const Container = styled.div`
    padding-top: ${styleVals.dimensions.spacing24};
    margin-left: ${styleVals.dimensions.spacing36};
    margin-right: ${styleVals.dimensions.spacing36};
    margin-bottom: ${styleVals.dimensions.spacing24};
    min-height: 80vh;
    background-color: ${props=>props.theme==='dark'?styleVals.color.dark:styleVals.color.light};
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    transition: 0.5s all linear;
`