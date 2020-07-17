import styled from 'styled-components'
import styleVals from '../../common/styleVals/global'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${styleVals.dimensions.spacing20};
    margin-bottom: ${styleVals.dimensions.spacing20};
`
// export const RecentLoginsWrapper = styled.div`
//     margin-right: auto;
//     width: 65%;
//     text-align: center;
//     height: 50vh;
//     padding-top: ${styleVals.dimensions.spacing80};
//     padding-bottom: ${styleVals.dimensions.spacing80};
//     box-shadow: 10px 10px 10px 10px #000000;
// `
export const LoginWrapper = styled.div`
    margin-left: auto;
    margin-right: ${styleVals.dimensions.spacing20};    
    box-shadow: ${styleVals.color.shadowColor};
    -webkit-box-shadow: ${styleVals.color.shadowColor};
    -moz-box-shadow: ${styleVals.color.shadowColor};
    border-radius: ${styleVals.dimensions.spacing12};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    min-height: 70vh;
    width: 25%;
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};        
`
