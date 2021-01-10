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
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    img {
        margin: auto;
        height: auto;
        width: auto;
    }
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
    width: auto;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: 10px;
    box-shadow: ${styleVals.color.shadowColor};    
`

export const AlertWrapper = styled.div`
    width: auto;
`
