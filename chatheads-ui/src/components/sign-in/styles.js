import styled from 'styled-components'
import styleVals from '../../common/styleVals/global'
import Button from '../../common/components/button'
import LinearProgress from '@material-ui/core/LinearProgress'


export const PageWrapper = styled.div`    
    width: 100%;  
    display: flex;
    margin: ${styleVals.dimensions.spacing20};
    flex-direction: row;
    @media ${styleVals.breakpoints.tablet},${styleVals.breakpoints.tabletPortrait},${styleVals.breakpoints.mobile}{
        flex-direction: column;
    }       
`
export const AlertWithLoginWrapper = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column; 
    margin-left: auto;
    @media ${styleVals.breakpoints.tablet},${styleVals.breakpoints.tabletPortrait},${styleVals.breakpoints.mobile}{
        width: 100%;
    }
`
export const LoginWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    min-height: 70vh;
    box-shadow: ${styleVals.color.shadowColor};
    @media ${styleVals.breakpoints.tablet},${styleVals.breakpoints.tabletPortrait},${styleVals.breakpoints.mobile}{        
    width: 100%;
    }
`
export const UsernameWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing56};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const PasswordWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing48};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const SignInButtonWrapper = styled(Button)`
    margin-top: ${styleVals.dimensions.spacing48};  
    width: auto;
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const Loader = styled(LinearProgress)`
    width: auto;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing6};
    margin-bottom: ${styleVals.dimensions.spacing6};
`