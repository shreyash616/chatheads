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
export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    margin-bottom: ${styleVals.dimensions.spacing24};     
    width: 100%;
    @media ${styleVals.breakpoints.tabletLandscape},${styleVals.breakpoints.tabletPortrait}{
        width: 50%;        
        margin-bottom: ${styleVals.dimensions.spacing0}; 
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
`
export const UsernameWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing24};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const NameWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing24};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const PhoneNumberWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing24};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const PasswordWrapper = styled.div `
    margin-top: ${styleVals.dimensions.spacing24};
    margin-left: ${styleVals.dimensions.spacing12};
    margin-right: ${styleVals.dimensions.spacing12};
`
export const SignUpButtonWrapper = styled(Button)`
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
export const Logo = styled.span`
    margin-left: ${styleVals.dimensions.spacing56};
    margin-top: ${styleVals.dimensions.spacing56};
    font-size: ${styleVals.dimensions.spacing56};
    font-family: ${styleVals.fonts.wordFont};        
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};    
    @media ${styleVals.breakpoints.tablet}, ${styleVals.breakpoints.mobile}{
        margin-top: ${styleVals.dimensions.spacing30};
        margin-left: ${styleVals.dimensions.spacing10};
        margin-right: ${styleVals.dimensions.spacing10};
    }     
`
export const Slogan = styled.span`
    margin-top: ${styleVals.dimensions.spacing20};
    margin-left: ${styleVals.dimensions.spacing56};
    margin-bottom: ${styleVals.dimensions.spacing20};
    font-size: ${styleVals.dimensions.spacing20};
    font-family: ${styleVals.fonts.wordFont};  
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    @media ${styleVals.breakpoints.tablet}, ${styleVals.breakpoints.mobile}{
        margin-top: ${styleVals.dimensions.spacing30};
        margin-left: ${styleVals.dimensions.spacing10};
        margin-right: ${styleVals.dimensions.spacing10};
    }  
`

export const AlertWrapper = styled.div`
    width: auto;
`