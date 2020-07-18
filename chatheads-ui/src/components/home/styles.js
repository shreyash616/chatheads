import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';
 

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;    
`

export const LogoWrapper = styled.div`
    display: table-cell;
    width: 50%;            
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;      
`

export const Logo = styled.span`
    font-size: ${styleVals.dimensions.spacing56};
    font-family: ${styleVals.fonts.wordFont};        
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};    
    @media ${styleVals.breakpoints.tablet}, ${styleVals.breakpoints.tabletPortrait}, ${styleVals.breakpoints.mobile}{
        
    }     
`

export const Slogan = styled.span`
    text-align: center;
    margin-top: ${styleVals.dimensions.spacing40};
    font-size: ${styleVals.dimensions.spacing20};
    margin-right: ${styleVals.dimensions.spacing150};
    margin-left: ${styleVals.dimensions.spacing150}; 
    font-family: ${styleVals.fonts.wordFont};  
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
`
