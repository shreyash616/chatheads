import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';

export const PageWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin: ${styleVals.dimensions.spacing16};
    width: 100%;
    height: 100%;

`
export const DetailsWrapper = styled.div`   
    height: 10vh;       
    display: flex;
    flex-direction: row;          
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    margin-bottom: ${styleVals.dimensions.spacing8};
`
export const ConversationWrapper = styled.div`           
    height: 65vh;
    display: flex;
    flex-direction: row;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
`
export const ChatheadWrapper = styled.div`    
    width:20%;
    display: flex;
    flex-direction: column;    
`
export const ChatWrapper = styled.div`    
    width:80%;
    display: flex;
    flex-direction: column; 

`