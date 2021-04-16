import styleVals from '../../common/styleVals/global';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress'

export const PageWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin: ${styleVals.dimensions.spacing16};
    width: auto;
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
    flex-direction: column;    
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing10};
    @media ${styleVals.breakpoints.tabletLandscape}, ${styleVals.breakpoints.tabletPortrait} {
        flex-direction: row;
    }
`
export const ChatheadWrapper = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column; 
    height: 33%;
    overflow: auto;
    border-bottom: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-right: none;
    @media ${styleVals.breakpoints.tabletPortrait} {
        width: 30%;
        flex-direction: column;
        height: 100%;
        border-bottom: none;
        border-right: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    }
    @media ${styleVals.breakpoints.tabletLandscape} {
        width: 20%;
        flex-direction: column;
        height: 100%;
        border-bottom: none;
        border-right: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    }  
`

export const ChatWrapper = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column; 
    @media ${styleVals.breakpoints.tabletPortrait} {
        width: 70%;
        height: 100%;
    }
    @media ${styleVals.breakpoints.tabletLandscape} {
        width: 80%;
        height: 100%;
    }
    overflow: auto;
    height: 70%;
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
export const UsernameLabel = styled.p`   
    font-weight: bold; 
    margin-top: ${props => props.shiftDown?styleVals.dimensions.spacing18:styleVals.dimensions.spacing0};
    margin-left: ${styleVals.dimensions.spacing12};   
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-size: ${styleVals.dimensions.spacing24};
    font-family: ${styleVals.fonts.wordFont}; 
`
export const Username = styled.p`
    font-weight: bold;
    margin-top: 0px;        
    margin-left: ${styleVals.dimensions.spacing18};   
    font-size: ${styleVals.dimensions.spacing24};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};    
    font-family: ${styleVals.fonts.wordFont}; 
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
export const ChatheadsCircles = styled.div`
    position: relative;
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue}; 
    border-radius: 50%;
    margin-top: ${styleVals.dimensions.spacing12};
    margin-bottom: ${props => props.index === props.chatheadsLength-1?styleVals.dimensions.spacing12:styleVals.dimensions.spacing0};
    margin-left: auto;
    margin-right: auto;
    height: ${styleVals.dimensions.spacing36};
    width: ${styleVals.dimensions.spacing36};
    &:hover{
        cursor: pointer;
        transform: scale(1.1,1.1);
    }
    transition: 0.2s all linear;
`
export const ChatheadBadge = styled.span`
    position: absolute;
    right: 3px;
    top: -3px;
    background: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    text-align: center;
    border-radius: 50%;    
    padding: 5px 5px;    
`
export const ChatheadsName = styled.span`
    margin-left: auto;
    margin-right: auto;
    margin-top: ${styleVals.dimensions.spacing10};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-family: ${styleVals.fonts.wordFont};
`

export const ChatWindow = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: auto;
    padding: ${styleVals.dimensions.spacing16};
    overflow: auto;
    ::-webkit-scrollbar {
        display:none;
    }
`
export const SearchInputWrapper = styled.div`
    height: 10%;
    width: auto;
    padding: ${styleVals.dimensions.spacing12};
    padding-bottom: ${styleVals.dimensions.spacing8};
    margin-bottom: ${props => props.search ? styleVals.dimensions.spacing32 : styleVals.dimensions.spacing12};
    @media ${styleVals.breakpoints.tabletLandscape}, ${styleVals.breakpoints.tabletPortrait} {
        width: auto;
    }
`
export const MessageInputWrapper = styled.div`
    height: 10%;
    width: 100%;
    padding: ${styleVals.dimensions.spacing16};
    padding-right: ${styleVals.dimensions.spacing10};
`
export const IconWrapper = styled.div`
    margin:auto;
    margin-right: ${styleVals.dimensions.spacing16};
     
`
export const MessageWrapper = styled.div`       
    display: flex;
    flex-direction: row;    
`
export const NoChatSelectedMessage = styled.h1`
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
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
export const UsernameWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.persistent?'row':'column'};
    @media ${styleVals.breakpoints.tabletLandscape} {
        flex-direction: row;
    }
`

export const UsernameEditWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const UpdateButtonWrapper = styled.div`
    margin-top: ${props => props.shiftDown?styleVals.dimensions.spacing24:styleVals.dimensions.spacing4};
    margin-left: ${styleVals.dimensions.spacing6};    
    border-radius: 50%;    
    & :hover {
        cursor: pointer;
        background-color: #CDCDCD;
    }    
`
export const UpdateFieldWrapper = styled.div`
    margin-top: ${styleVals.dimensions.spacing6};
    margin-left: ${styleVals.dimensions.spacing24}; 
`
export const SentMessage = styled.div`
    display: inline-flex;    
    margin-left: auto;
    width: auto;
    background-color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    padding: ${styleVals.dimensions.spacing12};
    border-radius: 10px; 
    margin-top: ${styleVals.dimensions.spacing12};
`
export const ReceivedMessage = styled.div`
    display: inline-flex;
    margin-right: auto;
    width: auto;
    background-color: ${props=>props.theme==='dark'?styleVals.color.dullOrange:styleVals.color.dullBlue};
    padding: ${styleVals.dimensions.spacing12};  
    border-radius: 10px;
    margin-top: ${styleVals.dimensions.spacing12};    
`

export const ReceivedTrDown = styled.div`   
    width: 0; 
    height: 0; 
    margin-right: auto;
    margin-left: ${styleVals.dimensions.spacing8};
    border-left: 5px solid transparent;    
    border-right: 5px solid transparent;    
    border-top: 5px solid ${props=>props.theme==='dark'?styleVals.color.dullOrange:styleVals.color.dullBlue};
    margin-bottom: ${styleVals.dimensions.spacing10};
    outline: none;
`

export const SentTrDown = styled.div`   
    width: 0; 
    height: 0; 
    margin-left: auto;
    margin-right: ${styleVals.dimensions.spacing8};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;    
    border-top: 5px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    margin-bottom: ${styleVals.dimensions.spacing12};
    outline: none;
`

export const ChatBottom = styled.div`
`

export const ChatWindowHeader = styled.div` 
    background-color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};           
    margin: ${styleVals.dimensions.spacing4};
    width: auto;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const ChatWindowHeaderName = styled.p`
    text-align: center;   
    font-weight: bold; 
    margin: 8px;
    margin-left: 28px;
    margin-right: 28px;
`

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    @media ${styleVals.breakpoints.tabletLandscape}, ${styleVals.breakpoints.tabletPortrait} {
        flex-direction: column
    }    
`
export const Chathead = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: ${styleVals.dimensions.spacing16};
    margin-right: ${styleVals.dimensions.spacing16};
    @media ${styleVals.breakpoints.tabletLandscape}, ${styleVals.breakpoints.tabletPortrait} {
        margin-left: ${styleVals.dimensions.spacing0};
        margin-right: ${styleVals.dimensions.spacing0};
    }
`

export const UnreadMarker = styled.div`    
    display: flex;  
    align-items: center;
    font-weight: bold;
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    &:before,
    &:after{
        content: '';
        flex-grow: 1;
        background-color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
        padding: 0.5px;
        height: 1px;
        margin: 0px 4px;
    }
`

