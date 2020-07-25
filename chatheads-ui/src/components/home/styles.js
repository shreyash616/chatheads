import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress'
 

export const PageWrapper = styled.div`
    width: 100%;  
    display: flex;
    flex-direction: row;
    @media ${styleVals.breakpoints.tablet},${styleVals.breakpoints.tabletPortrait},${styleVals.breakpoints.mobile}{
        flex-direction: column;
    }
`

export const LogoWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media ${styleVals.breakpoints.tablet},${styleVals.breakpoints.tabletPortrait},${styleVals.breakpoints.mobile}{
        width: 100%;
    }         
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;      
`

export const Logo = styled.span`
    margin-left: ${styleVals.dimensions.spacing56};
    margin-top: ${styleVals.dimensions.spacing56};
    font-size: ${styleVals.dimensions.spacing56};
    font-family: ${styleVals.fonts.wordFont};        
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};    
    @media ${styleVals.breakpoints.tablet}, ${styleVals.breakpoints.tabletPortrait}, ${styleVals.breakpoints.mobile}{
        margin-top: ${styleVals.dimensions.spacing30};
        margin-left: ${styleVals.dimensions.spacing30};
        margin-right: ${styleVals.dimensions.spacing30};
    }     
`

export const Slogan = styled.span`
    margin-top: ${styleVals.dimensions.spacing20};
    margin-left: ${styleVals.dimensions.spacing56};
    margin-bottom: ${styleVals.dimensions.spacing20};
    font-size: ${styleVals.dimensions.spacing20};
    font-family: ${styleVals.fonts.wordFont};  
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    @media ${styleVals.breakpoints.tablet}, ${styleVals.breakpoints.tabletPortrait}, ${styleVals.breakpoints.mobile}{
        margin-top: ${styleVals.dimensions.spacing30};
        margin-left: ${styleVals.dimensions.spacing30};
        margin-right: ${styleVals.dimensions.spacing30};
    }  
`

export const Loader = styled(LinearProgress)`
    width: 100%;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    box-shadow: ${styleVals.color.shadowColor};    
    margin-bottom: ${styleVals.dimensions.spacing6};
`

export const AlertWrapper = styled.div`
    width: 20%;
    margin-top: ${styleVals.dimensions.spacing12};
    margin-left: ${styleVals.dimensions.spacing40};
`
