import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import chatConstants from '../../common/constants/chatConstants'
import PageContainer from '../../common/components/page-container/index'
import TextInput from '../../common/components/text-input'

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
    InputWrapper,
    NoChatSelectedMessage
} from './styles'

const mapStateToProps = store => ({
  signInData: store.signIn   
})

const chats = [{
  name: 'sona',
  convos: [
    { 
      message: 'Hi',
      time: '23:01:01'
    },
    {
      message: 'Hi',
      time: '23:01:01'
    }
  ]
},
{
  name: 'nalu',
  convos: [
    { 
      message: 'Hi',
      time: '23:01:01'
    },
    {
      message: 'Hi',
      time: '23:01:01'
    }
  ]
}]

const Chats = (props) => {  

    const [showChats,setShowChats] = useState(true)
    const [message, setMessage] = useState('')
    const [selectedChat, setSelectedChat] = useState(null)

    //sub component

    const getChatheads = () => {
      // props.signInData.data.data.userData.chats && props.signInData.data.data.userData.chats.map((chathead)=>{
        return chats.map((chat)=>{
        return <React.Fragment>
          <ChatheadsCircles 
            onClick={(chat)=>setSelectedChat(chat)}
          {...props}/>
          <ChatheadsName {...props}>{chat.name}</ChatheadsName>
        </React.Fragment>
        
      })
    }
    const handleMessage = (event) => {
      setMessage(event.target.value)
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
                   theme = {props.theme}>{chatConstants.PROFILE_TITLE}</ProfileTitle>  
                  <ChatsTitle
                   onClick={()=>setShowChats(true)}
                   theme = {props.theme}>{chatConstants.CHATS_TITLE}</ChatsTitle>                                              
                  </DetailsWrapper>
                  {showChats
                 ?<ConversationWrapper {...props}>
                    <ChatheadWrapper {...props}> 
                      {getChatheads()}                                                      
                    </ChatheadWrapper>
                    <ChatWrapper {...props}>
                      {selectedChat
                      ? <React.Fragment>
                          <ChatWindow>
                          </ChatWindow>
                          <InputWrapper>
                            <TextInput
                            theme={props.theme}
                            value={message}
                            onChange={handleMessage}/>
                          </InputWrapper>
                        </React.Fragment>
                      : <NoChatSelectedMessage theme={props.theme}>No Chat Selected</NoChatSelectedMessage>}
                    </ChatWrapper>
                  </ConversationWrapper>
                 :<ConversationWrapper {...props}>
                    <ProfileWrapper {...props}>

                    </ProfileWrapper>
                  </ConversationWrapper>}                  
                </PageWrapper>
              </PageContainer>
            </React.Fragment>
            :<Redirect to='/home'/>:<Redirect to='/home'/>}
        </React.Fragment>
      )
  }
  
export default connect(mapStateToProps,null)(Chats)
