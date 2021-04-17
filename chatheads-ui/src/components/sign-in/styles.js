import styled from 'styled-components'
import styleVals from '../../common/styleVals/global'
import Button from '../../common/components/button'
import LinearProgress from '@material-ui/core/LinearProgress'


export const PageWrapper = styled.div`    
    display: flex;
    flex-direction: column;        
    @media ${styleVals.breakpoints.tabletLandscape},${styleVals.breakpoints.tabletPortrait}{
        flex-direction: row;
    }        
`
export const AlertWithLoginWrapper = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;     
    margin-top: auto;
    margin-bottom: auto;
    @media ${styleVals.breakpoints.tabletLandscape},${styleVals.breakpoints.tabletPortrait}{
        width: 35%;
        margin-left: auto;
    }
`
export const LoginWrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};    
    box-shadow: ${styleVals.color.shadowColor};
    @media ${styleVals.breakpoints.tablet},${styleVals.breakpoints.tabletPortrait},${styleVals.breakpoints.mobile}{        
        width: 100%;
    }
    h1{        
        text-align: center;        
        margin-top: ${styleVals.dimensions.spacing24};
    }
`
export const UsernameWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing8};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const PasswordWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing16};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const SignInButtonWrapper = styled(Button)`
    margin-top: ${styleVals.dimensions.spacing36};
    width: auto;
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
    margin-bottom: ${styleVals.dimensions.spacing32};
`
export const Loader = styled(LinearProgress)`
    width: auto;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    box-shadow: ${styleVals.color.shadowColor};
    border-radius: ${styleVals.dimensions.spacing6};
    margin-bottom: ${styleVals.dimensions.spacing6};
`