import styled from 'styled-components'
import styleVals from '../../common/styleVals/global'
import Button from '../../common/components/button'

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
    padding-left: ${styleVals.dimensions.spacing12};  
    padding-right: ${styleVals.dimensions.spacing12};  
    box-shadow: ${styleVals.color.shadowColor};
    -webkit-box-shadow: ${styleVals.color.shadowColor};
    -moz-box-shadow: ${styleVals.color.shadowColor};
    border-radius: ${styleVals.dimensions.spacing12};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    min-height: 70vh;
    width: 25%;
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};        
`
export const InputFieldsWrapper = styled.div `

`
export const SignInButtonWrapper = styled(Button)`  
    width: 100%;      
`