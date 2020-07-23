import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';

export const PageWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;

`
export const DetailsWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: ${styleVals.dimensions.spacing80};
    align-items: stretch;
    
`
export const ConversationWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    margin-left:${styleVals.dimensions.spacing80}
    
     
`
export const ChatheadWrapper = styled.div`
    min-height: 20%;
    width:20%;
    display: flex;
    flex-direction: column; 
    border: 1px solid #ccc;
    
`
export const ChatWrapper = styled.div`
    min-height:80%;
    width:80%;
    display: flex;
    flex-direction: column; 
    border: 1px solid #ccc;
`