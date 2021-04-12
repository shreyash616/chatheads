import React, { useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import actions from '../../redux/actions/index'
import chatConstants from '../../common/constants/chatConstants'

import PageContainer from '../../common/components/page-container/index'
import TextInput from '../../common/components/text-input'
import Alert from '../../common/components/alert-box'
import DialogModal from '../../common/components/dialog-modal'

import Pusher from 'pusher-js'

import {
    PageWrapper,
    DetailsWrapper,
    ConversationWrapper,
    ChatheadWrapper,
    ChatWrapper,
    ChatsTitle,
    ProfileTitle,    
    ChatheadsCircles,
    ChatheadsName,
    ChatWindow,
    SearchInputWrapper,
    MessageInputWrapper,
    MessageWrapper,
    NoChatSelectedMessage,
    Loader,
    NoChatheadsMessage,    
    UsernameLabel,
    Username,
    UsernameWrapper,    
    UpdateButtonWrapper,
    UpdateFieldWrapper,    
    IconWrapper,
    SentMessage,
    ReceivedMessage,
    SentTrDown,
    ReceivedTrDown,    
    ChatWindowHeader,
    ChatWindowHeaderName,
    RowDiv,
    Chathead
} from './styles'
import { getResponseKey } from '../../common/utilities/getResponseKey'


const mapStateToProps = store => ({
  homeData: store.homeData,
  signInData: store.signIn,
  searchData: store.searchChatheadsData,
  sendMessageData: store.sendMessageData,
  updateUserIdData: store.updateUserIdData,
  getMessagesData: store.getMessagesData
})

const mapDispatchToProps = dispatch => ({
  searchChatheads: (searchDetails) => dispatch(actions.chatsActions.searchChatheads(searchDetails)),
  sendMessage: (messageDetails) => dispatch(actions.chatsActions.sendMessage(messageDetails)),
  updateUserId: (userId) => dispatch(actions.chatsActions.updateUserId(userId)),
  initiateSignIn: (signInDetails) => dispatch(actions.signInActions.initiateSignIn(signInDetails)),
  clearUpdateUserIdData: () => dispatch(actions.chatsActions.clearUpdateUserIdData()),
  clearSendingMessageData: () => dispatch(actions.chatsActions.clearSendingMessageData()),
  getMessages: (userDetails) => dispatch(actions.chatsActions.getMessages(userDetails))
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
    const [errorAlert, setErrorAlert] = useState('')

    const chatBottomRef = useRef()

    const focusOnField = (id) => {
      const field = document.getElementById(id)
      field && field.focus()
    }

    useEffect(()=>{
      const pusher = new Pusher('93a108f8963680657f0b', {
        cluster: 'us2'
      });
  
      var channel = pusher.subscribe('chatheads-messages');
      channel.bind('message-received', function(data) {
        console.log('change received')
        props.getMessages({
          jwtToken: props.homeData.data?props.homeData.data.data.jwtToken:null,
          data: {
            userId: userDetails.userId
          }
        })
      });
      return () => {
        channel.unbind_all()
        channel.unsubscribe()
      }
    }, [userDetails])

    useEffect(()=>{
      setMessage('')
      const chats = getResponseKey(['messages'], selectedChat)
      chats && chats.length > 0 && focusOnField(`message-${chats.length}`)
    }, [selectedChat])

    useEffect(()=>{
      if(props.signInData.status === 'success'){        
        const userDetailsFromApi = getResponseKey(['data', 'data', 'userData'], props.signInData)
        userDetailsFromApi && setUserDetails(userDetailsFromApi)        
      }
      else{
        setUserDetails(null)
      }
    },[props.signInData])

    useEffect(()=>{    
      const updateStatus = getResponseKey(['status'], props.updateUserIdData)        
      if(updateStatus === 'success'){      
        setUpdateUserIdField(props.updateUserIdData.data.data.updatedUserId)
        setUserDetails({
          ...userDetails,
          userId: props.updateUserIdData.data.data.updatedUserId
        })
        setShowUpdateField(false)
        setErrorAlert('')
      } else if (updateStatus === 'failure') {
        const error = getResponseKey(['data', 'data', 'data'], props.updateUserIdData)            
        error && setErrorAlert(error)
      }
      props.clearUpdateUserIdData()
    }, [props.updateUserIdData])

    useEffect(()=>{
      const messagesStatus = getResponseKey(['status'], props.getMessagesData)
      if(messagesStatus === 'success'){
        setUserDetails({
          ...userDetails,
          chats: getResponseKey(['data', 'data', 'userData', 'chats'], props.getMessagesData)
        })    
        const selectedId = selectedChat.userId
        const chats = getResponseKey(['data', 'data', 'userData', 'chats'], props.getMessagesData)
        for(let i=0;i<chats.length;i++){
          if(chats[i].userId === selectedId){
            setSelectedChat(chats[i])                       
            break
          }
        }    
      }
    }, [props.getMessagesData])

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
      props.clearSendingMessageData()    
    },[props.sendMessageData])

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
      const usersChat = userDetails.chats && userDetails.chats.length > 0 && userDetails.chats.filter(userChat => userChat.userId === chat.userId)[0]
      setSelectedChat(usersChat || chat)
      setSearchText('')
    }
    const sendMessage = (e) => {
      e.preventDefault()
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
      return <IconWrapper>
              <button style={{
                background: 'none',
                border: 'none'
              }} type='submit'>
              <svg tabIndex={1} height='25' width = '25' className={props.theme === 'dark'?"svg-icon-orange icon-margin-top":"svg-icon-blue icon-margin-top"} viewBox="0 0 20 20">
                <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
              </svg>
              </button>
            </IconWrapper>
    }

    const getChats = () => {
      if(selectedChat.messages){
        return selectedChat.messages.map((messageObj,i)=>{        
          if(messageObj.userId === userDetails.userId){
            return <React.Fragment key={i}>
              <SentMessage theme={props.theme}>{messageObj.message}</SentMessage>          
              <SentTrDown tabIndex={-1} id={`message-${i+1}`} theme={props.theme}/>
              {i === selectedChat.messages.length-1 && <div ref={chatBottomRef}></div> }
            </React.Fragment>
          }
          else{
            return <React.Fragment key={i}>
              <ReceivedMessage theme={props.theme}>{messageObj.message}</ReceivedMessage>
              <ReceivedTrDown tabIndex={-1} id={`message-${i+1}`} theme={props.theme}/>
              {i === selectedChat.messages.length-1 && <div ref={chatBottomRef}></div> }
            </React.Fragment>
          }
        })
      }
    }

    const getSearchedChatheads = () => {
      return <RowDiv>
      {searchedChatheads.map((chat)=>{
        if(chat.userId !== userDetails.userId){
          return (
          <Chathead>
            <ChatheadsCircles 
              onClick={()=>handleClickOnChatAfterSearch(chat)}
              {...props}
            />
            <ChatheadsName {...props}>{chat.name}</ChatheadsName>
          </Chathead> 
          )
        }
        })}</RowDiv>
    }

    const getChatheads = () => {    
      const sortedChat = userDetails && userDetails.chats.length > 0 && userDetails.chats.sort((a,b) => new Date(b.updateTime) - new Date(a.updateTime))  
        if(userDetails){
          return <RowDiv>{sortedChat.map((chat)=>{
            if(chat.userId !== userDetails.userId){
              return (
              <Chathead>
                <ChatheadsCircles 
                  onClick={()=>setSelectedChat(chat)}
                {...props}/>
                <ChatheadsName {...props}>{chat.userId}</ChatheadsName>
              </Chathead>
              )
            }        
            })}</RowDiv>
        }
    }

    const handleUpdateUserId = () => {
      const payload = {
        jwtToken: props.homeData.data?props.homeData.data.data.jwtToken:null,
        data: {
          newUserId: updateUserIdField,
          userId: userDetails.userId
        }
      }
      props.updateUserId(payload)
    }

    const getProfile = () => {
      return (
        <React.Fragment>
          {props.updateUserIdData.loading && <Loader/>}
          {!!errorAlert && <Alert>{errorAlert}</Alert>}
          <br aria-hidden/>
          <UsernameWrapper>
            <UsernameLabel theme={props.theme}>{chatConstants.NAME_LABEL}</UsernameLabel>
            <Username theme={props.theme}>{userDetails.name}</Username>
          </UsernameWrapper>          
          <UsernameWrapper>            
            <UsernameLabel shiftDown={showUpdateField} theme={props.theme}>{chatConstants.USERNAME_LABEL}</UsernameLabel>
            <UsernameWrapper persistent>
            {showUpdateField 
            ? <UpdateFieldWrapper>
                <TextInput
                  theme={props.theme}
                  value={updateUserIdField}
                  onChange={handleUpdateUserIdField}
                />
              </UpdateFieldWrapper>  
            : <Username theme={props.theme}>{userDetails.userId}</Username>
            }            
            {!showUpdateField && <UpdateButtonWrapper><svg role='button' onClick={triggerUpdateField} height='1em' width = '1em' className={props.theme === 'dark'?"svg-icon-orange":"svg-icon-blue"} viewBox="0 0 20 20">
							<path fill="none" d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"></path>
						</svg></UpdateButtonWrapper>}

            {showUpdateField && <UpdateButtonWrapper shiftDown><svg height='1em' width = '1em' role='button' onClick={handleUpdateUserId} className={props.theme === 'dark'?"svg-icon-orange ":"svg-icon-blue "} viewBox="0 0 20 20">
							<path fill="none" d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"></path>
							<path fill="none" d="M5.112,7.3c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808c0-0.447-0.363-0.808-0.808-0.808H5.92C5.475,6.492,5.112,6.853,5.112,7.3z"></path>
							<path fill="none" d="M5.92,5.331h4.342c0.445,0,0.808-0.361,0.808-0.808c0-0.446-0.363-0.808-0.808-0.808H5.92c-0.444,0-0.808,0.361-0.808,0.808C5.112,4.97,5.475,5.331,5.92,5.331z"></path>
							<path fill="none" d="M13.997,9.218H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,9.58,14.442,9.218,13.997,9.218z"></path>
							<path fill="none" d="M13.997,11.944H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.446,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,12.306,14.442,11.944,13.997,11.944z"></path>
							<path fill="none" d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z"></path>
						</svg></UpdateButtonWrapper>}
            </UsernameWrapper>
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
                       <div>
                      {props.searchData.loading && <Loader theme={props.theme}/>}
                      <SearchInputWrapper search={false}>
                        <TextInput
                          placeholder={chatConstants.SEARCH_PLACEHOLDER}
                          theme={props.theme}
                          value={searchText}
                          onChange={handleSearchText}
                        />
                      </SearchInputWrapper>
                      </div>
                      {getChatheads()}   
                      {userDetails && userDetails.chats.length === 0 && <NoChatheadsMessage theme={props.theme}>{chatConstants.NO_CHATS_MESSAGE}</NoChatheadsMessage>}                                                   
                      </ChatheadWrapper>
                     :<ChatheadWrapper theme={props.theme}>
                      <SearchInputWrapper search>
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
                          <form onSubmit={sendMessage}>
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
                          </form>
                        </React.Fragment>
                      : <NoChatSelectedMessage theme={props.theme}>{chatConstants.NO_CHAT_SELECTED_MESSAGE}</NoChatSelectedMessage>}
                    </ChatWrapper>
                  </ConversationWrapper>
                 :<ConversationWrapper {...props}>                    
                    <DialogModal
                      title={'Your profile'}
                      isOpen={!showChats}
                      onClose={() => {
                        setShowChats(true)
                        setShowUpdateField(false)
                      }}
                      theme={props.theme}
                      showClose
                      showTitle
                    >{getProfile()}
                    </DialogModal>                    
                  </ConversationWrapper>}                  
                </PageWrapper>
              </PageContainer>
            </React.Fragment>
            :<Redirect to='/home'/>:<Redirect to='/home'/>}
        </React.Fragment>
      )
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Chats)
