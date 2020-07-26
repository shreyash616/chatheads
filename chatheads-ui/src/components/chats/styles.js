import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress'

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
    width: 20%;
    display: flex;
    flex-direction: column; 
    height: 100%;
    overflow: auto;
    border-right: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};   
`

export const ChatWrapper = styled.div`    
    width:80%;
    display: flex;
    flex-direction: column; 
`
export const ProfileTitle = styled.span`
    margin-left: auto;
    margin-right: ${styleVals.dimensions.spacing24};
    margin-top: auto;
    margin-bottom: auto;
    outline: none;
    padding: ${styleVals.dimensions.spacing2}; 
    font-size: ${styleVals.dimensions.spacing20};
    font-family: ${styleVals.fonts.wordFont};            
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};    
    ${props => props.isClicked
    ? ({
        borderBottom: `2px solid ${props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue}`
    })
    :null
    }
    &:hover{
        cursor: pointer;
    }
`
export const ChatsTitle = styled.span`
    margin-left: ${styleVals.dimensions.spacing20};
    margin-top: auto;
    margin-bottom: auto;
    margin-right: ${styleVals.dimensions.spacing20};
    padding: ${styleVals.dimensions.spacing2}; 
    font-size: ${styleVals.dimensions.spacing20};
    font-family: ${styleVals.fonts.wordFont};        
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    outline: none;    
    ${props => props.isClicked
    ? ({
        borderBottom: `2px solid ${props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue}`
    })
    :null
    }    
    &:hover{
        cursor: pointer;
    }
`
export const ProfileWrapper = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right:auto;
    border-right: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};   
    border-left: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};   
`
export const ChatheadsCircles = styled.div`
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue}; 
    border-radius: 50%;
    margin-top: ${styleVals.dimensions.spacing24};
    margin-bottom: ${props => props.index === props.chatheadsLength-1?styleVals.dimensions.spacing24:styleVals.dimensions.spacing0};
    margin-left: auto;
    margin-right: auto;
    height: ${styleVals.dimensions.spacing36};
    width: ${styleVals.dimensions.spacing36};
`
export const ChatheadsName = styled.span`
    margin-left: auto;
    margin-right: auto;
    margin-top: ${styleVals.dimensions.spacing10};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-family: ${styleVals.fonts.wordFont};
`

export const ChatWindow = styled.div`
    height: 90%;
    width: auto;
    padding: ${styleVals.dimensions.spacing16};
    overflow: auto;
`
export const InputWrapper = styled.div`
    height: 10%;
    width: auto;
    padding: ${styleVals.dimensions.spacing16};
`

export const NoChatSelectedMessage = styled.h1`
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-family: ${styleVals.fonts.wordFont};
`
export const NoChatheadsMessage = styled.h2`
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-family: ${styleVals.fonts.wordFont};
`
export const Loader = styled(LinearProgress)`
    width: auto;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    box-shadow: ${styleVals.color.shadowColor};
    border-radius: ${styleVals.dimensions.spacing6};
    margin-bottom: ${styleVals.dimensions.spacing6};
`