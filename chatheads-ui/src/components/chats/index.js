import React, { useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import actions from '../../redux/actions/index'
import chatConstants from '../../common/constants/chatConstants'

import PageContainer from '../../common/components/page-container/index'
import TextInput from '../../common/components/text-input'
import Button from '../../common/components/button'

import {
    PageWrapper,
    DetailsWrapper,
    ConversationWrapper,
    ChatheadWrapper,
    ChatWrapper,
    ChatsTitle,
    ProfileTitle,
    ProfileWrapper,
    ChatheadsCircles,
    ChatheadsName,
    ChatWindow,
    SearchInputWrapper,
    MessageInputWrapper,
    MessageWrapper,
    NoChatSelectedMessage,
    Loader,
    NoChatheadsMessage,
    ProfileName,
    UsernameLabel,
    Username,
    UsernameWrapper,
    UsernameEditWrapper,
    UpdateButtonWrapper,
    UpdateFieldWrapper,    
    IconWrapper,
    SentMessage,
    ReceivedMessage,
    SentTrDown,
    ReceivedTrDown,
    ChatBottom,
    ChatWindowHeader,
    ChatWindowHeaderName
} from './styles'


const mapStateToProps = store => ({
  homeData: store.homeData,
  signInData: store.signIn,
  searchData: store.searchChatheadsData,
  sendMessageData: store.sendMessageData   
})

const mapDispatchToProps = dispatch => ({
  searchChatheads: (searchDetails) => dispatch(actions.chatsActions.searchChatheads(searchDetails)),
  sendMessage: (messageDetails) => dispatch(actions.chatsActions.sendMessage(messageDetails))
})

const Chats = (props) => {  

    const [userDetails, setUserDetails] = useState(null)
    const [showChats,setShowChats] = useState(true)
    const [message, setMessage] = useState('')
    const [selectedChat, setSelectedChat] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [searchedChatheads, setSearchedChatheads] = useState([])  
    const [searchError, setSearchError] = useState('') 
    const [showUpdateField, setShowUpdateField] = useState(false) 
    const [updateUserIdField, setUpdateUserIdField] = useState('')

    const chatBottomRef = useRef()

    useEffect(()=>{
      if(props.signInData.status === 'success'){
        console.log(props.signInData.data.data.userData)
        setUserDetails(props.signInData.data.data.userData)
      }
      else{
        setUserDetails(null)
      }
    },[props.signInData])

    useEffect(()=>{
      if(userDetails){
        setUpdateUserIdField(userDetails.userId)
      }
    },[userDetails])

    useEffect(()=>{      
      if(searchText){
        let searchDetails = {
          jwtToken: props.homeData.data?props.homeData.data.data.jwtToken:null,
          data: {
            searchText
          }
        }
        props.searchChatheads(searchDetails)
      }
    },[searchText])

    useEffect(()=>{
      if(props.sendMessageData.status === 'success'){        
        setUserDetails(props.sendMessageData.data.data)
        const selectedId = selectedChat.userId
        const chats = props.sendMessageData.data.data.chats
        for(let i=0;i<chats.length;i++){
          if(chats[i].userId === selectedId){
            setSelectedChat(chats[i])
            setMessage('')            
            break
          }
        }
      }      
    },[props.sendMessageData])

    // useEffect(()=>{
    //   if(chatBottomRef){
    //     chatBottomRef.current && chatBottomRef.current.scrollIntoView()
    //   }
    // })

    useEffect(()=>{
      if(props.searchData.status === 'success'){
        if(props.searchData.data.data){
          setSearchedChatheads(props.searchData.data.data)
          setSearchError('')
        }
      }
      else{
        setSearchedChatheads([])
        if(props.searchData.data){          
          if(props.searchData.data.data){
            setSearchError(props.searchData.data.data)
          }
          else{
            setSearchError(props.searchData.data)
          }
        }
      }
    },[props.searchData])

    //functionalities
    const triggerUpdateField = () => {
      setShowUpdateField(!showUpdateField)
    }
    const handleMessage = (event) => {
      setMessage(event.target.value)
    }
    const handleSearchText = (event) => {
      setSearchText(event.target.value)      
    }
    const handleClickOnChatAfterSearch = (chat) => {
      setSelectedChat(chat)
      setSearchText('')
    }
    const sendMessage = () => {
      if(message){
        let payload = {
          jwtToken: props.homeData.data ? props.homeData.data.data.jwtToken: null,
          data: {
            senderUserId: userDetails?userDetails.userId:'',
            receiverUserId: selectedChat?selectedChat.userId:'',
            message: message
          }
        }
        props.sendMessage(payload)
      }      
    }

    const handleUpdateUserIdField = (e) => {
      setUpdateUserIdField(e.target.value)
    }

    //sub components
    const SendIcon = () => {
      return <IconWrapper onClick={()=>sendMessage()}>
              <svg class={props.theme === 'dark'?"svg-icon-orange":"svg-icon-blue"} viewBox="0 0 20 20">
                <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
              </svg>
            </IconWrapper>
    }

    const getChats = () => {
      if(selectedChat.messages){
        return selectedChat.messages.map((messageObj,i)=>{        
          if(messageObj.userId === userDetails.userId){
            return <React.Fragment>
              <SentMessage theme={props.theme}>{messageObj.message}</SentMessage>          
              <SentTrDown theme={props.theme}/>
              {i === selectedChat.messages.length-1 && <div ref={chatBottomRef}></div> }
            </React.Fragment>
          }
          else{
            return <React.Fragment>
              <ReceivedMessage theme={props.theme}>{messageObj.message}</ReceivedMessage>
              <ReceivedTrDown theme={props.theme}/>
              {i === selectedChat.messages.length-1 && <div ref={chatBottomRef}></div> }
            </React.Fragment>
          }
        })
      }
    }

    const getSearchedChatheads = () => {
      return searchedChatheads.map((chat)=>{
        if(chat.userId !== userDetails.userId){
          return (
          <React.Fragment>
            <ChatheadsCircles 
              onClick={()=>handleClickOnChatAfterSearch(chat)}
              {...props}
            />
            <ChatheadsName {...props}>{chat.name}</ChatheadsName>
          </React.Fragment> 
          )
        }
        })
    }

    const getChatheads = () => {
      // props.signInData.data.data.userData.chats && props.signInData.data.data.userData.chats.map((chathead)=>{
        if(userDetails){
          return userDetails.chats.map((chat)=>{
            if(chat.userId !== userDetails.userId){
              return (
              <React.Fragment>
                <ChatheadsCircles 
                  onClick={()=>setSelectedChat(chat)}
                {...props}/>
                <ChatheadsName {...props}>{chat.userId}</ChatheadsName>
              </React.Fragment>
              )
            }        
            })
        }
    }

    const getProfile = () => {
      return (
        <React.Fragment>
          <ProfileName theme={props.theme}>{userDetails.name}</ProfileName>
          <UsernameWrapper>
            <UsernameEditWrapper>
            <UsernameLabel theme={props.theme}>{chatConstants.USERNAME_LABEL}</UsernameLabel>
            {showUpdateField 
            ? <UpdateFieldWrapper>
                <TextInput
                  value={updateUserIdField}
                  onChange={handleUpdateUserIdField}
                />
              </UpdateFieldWrapper>  
            : <Username theme={props.theme}>{userDetails.userId}</Username>
            }
            </UsernameEditWrapper>
            {!showUpdateField && <UpdateButtonWrapper theme={props.theme}><Button onClick={triggerUpdateField}>{chatConstants.UPDATE_USER_NAME}</Button></UpdateButtonWrapper>}
            {showUpdateField && <UpdateButtonWrapper theme={props.theme}><Button onClick={triggerUpdateField}>{chatConstants.SAVE_USER_NAME}</Button></UpdateButtonWrapper>}
          </UsernameWrapper>
        </React.Fragment>
      )
    }

    return(
        <React.Fragment>                           
          {props.signInData.data
            ?props.signInData.data.data.userData             
            ?<React.Fragment>
              <PageContainer {...props}>            
                <PageWrapper {...props}>
                  <DetailsWrapper {...props}>
                  <ProfileTitle
                   onClick={()=>setShowChats(false)}
                   isClicked={!showChats}
                   theme = {props.theme}>{chatConstants.PROFILE_TITLE}</ProfileTitle>  
                  <ChatsTitle
                   onClick={()=>setShowChats(true)}
                   isClicked={showChats}
                   theme = {props.theme}>{chatConstants.CHATS_TITLE}</ChatsTitle>                                              
                  </DetailsWrapper>
                  {showChats
                 ?<ConversationWrapper {...props}>
                    {!searchText
                     ?<ChatheadWrapper theme={props.theme}>
                      {props.searchData.loading && <Loader theme={props.theme}/>}
                      <SearchInputWrapper>
                        <TextInput
                          placeholder={chatConstants.SEARCH_PLACEHOLDER}
                          theme={props.theme}
                          value={searchText}
                          onChange={handleSearchText}
                        />
                      </SearchInputWrapper> 
                      {getChatheads()}   
                      {userDetails && userDetails.chats.length === 0 && <NoChatheadsMessage theme={props.theme}>{chatConstants.NO_CHATS_MESSAGE}</NoChatheadsMessage>}                                                   
                      </ChatheadWrapper>
                     :<ChatheadWrapper theme={props.theme}>
                      <SearchInputWrapper>
                        {props.searchData.loading && <Loader theme={props.theme}/>}
                        <TextInput
                          placeholder={chatConstants.SEARCH_PLACEHOLDER}
                          theme={props.theme}
                          value={searchText}
                          onChange={handleSearchText}
                        />
                      </SearchInputWrapper>
                      {getSearchedChatheads()}
                      {searchError && <NoChatheadsMessage theme={props.theme}>{searchError}</NoChatheadsMessage>}
                      </ChatheadWrapper>
                    }                    
                    <ChatWrapper {...props}>
                      {selectedChat
                      ? <React.Fragment>
                          <ChatWindowHeader theme={props.theme}>
                            <ChatWindowHeaderName>{selectedChat?selectedChat.userId:''}</ChatWindowHeaderName>
                          </ChatWindowHeader>
                          <ChatWindow>                            
                            {getChats()}                             
                          </ChatWindow>
                          <MessageWrapper>
                            <MessageInputWrapper>
                              <TextInput
                              theme={props.theme}
                              value={message}
                              placeholder={chatConstants.MESSAGE_PLACEHOLDER}
                              onChange={handleMessage}/>                            
                            </MessageInputWrapper>
                            <SendIcon />
                          </MessageWrapper>
                        </React.Fragment>
                      : <NoChatSelectedMessage theme={props.theme}>{chatConstants.NO_CHAT_SELECTED_MESSAGE}</NoChatSelectedMessage>}
                    </ChatWrapper>
                  </ConversationWrapper>
                 :<ConversationWrapper {...props}>
                    <ProfileWrapper {...props}>
                      {getProfile()}
                    </ProfileWrapper>
                  </ConversationWrapper>}                  
                </PageWrapper>
              </PageContainer>
            </React.Fragment>
            :<Redirect to='/home'/>:<Redirect to='/home'/>}
        </React.Fragment>
      )
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Chats)
