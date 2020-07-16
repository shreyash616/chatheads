import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';
 

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;    
`

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;         
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
    margin-top: ${styleVals.dimensions.spacing56};    
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    text-align: center;     
`

export const Slogan = styled.span`
    margin-top: ${styleVals.dimensions.spacing40};
    font-size: ${styleVals.dimensions.spacing20};
    margin-right: ${styleVals.dimensions.spacing80};
    margin-left: ${styleVals.dimensions.spacing80}; 
    font-family: ${styleVals.fonts.wordFont};  
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
`
