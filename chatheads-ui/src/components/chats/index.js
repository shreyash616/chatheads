import React, { useState, useEffect } from 'react'
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
    InputWrapper,
    NoChatSelectedMessage,
    Loader,
    NoChatheadsMessage,
    ProfileName,
    UsernameLabel,
    Username,
    UsernameWrapper,
    UsernameEditWrapper,
    UpdateButtonWrapper,
    UpdateFieldWrapper
} from './styles'


const mapStateToProps = store => ({
  homeData: store.homeData,
  signInData: store.signIn,
  searchData: store.searchChatheadsData   
})

const mapDispatchToProps = dispatch => ({
  searchChatheads: (searchDetails) => dispatch(actions.chatsActions.searchChatheads(searchDetails))
})

const chats = []

const Chats = (props) => {  

    const [userDetails, setUserDetails] = useState(null)
    const [showChats,setShowChats] = useState(true)
    const [message, setMessage] = useState('')
    const [selectedChat, setSelectedChat] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [searchedChatheads, setSearchedChatheads] = useState([])  
    const [searchError, setSearchError] = useState('') 
    const [showUpdateField, setShowUpdateField] = useState(false) 
    const [updateField, setUpdateField] = useState('')

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

    //sub components
    const getSearchedChatheads = () => {
      return searchedChatheads.map((chat)=>{
        return <React.Fragment>
          <ChatheadsCircles 
            onClick={(chat)=>setSelectedChat(chat)}
            {...props}
          />
          <ChatheadsName {...props}>{chat.name}</ChatheadsName>
        </React.Fragment>        
        })
    }

    const getChatheads = () => {
      // props.signInData.data.data.userData.chats && props.signInData.data.data.userData.chats.map((chathead)=>{
        if(userDetails){
          return userDetails.chats.map((chat)=>{
            return <React.Fragment>
              <ChatheadsCircles 
                onClick={(chat)=>setSelectedChat(chat)}
              {...props}/>
              <ChatheadsName {...props}>{chat.userId}</ChatheadsName>
            </React.Fragment>        
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
                  value={userDetails.userId}
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
                      <InputWrapper>
                        <TextInput
                          placeholder={chatConstants.SEARCH_PLACEHOLDER}
                          theme={props.theme}
                          value={searchText}
                          onChange={handleSearchText}
                        />
                      </InputWrapper> 
                      {getChatheads()}                                                      
                      </ChatheadWrapper>
                     :<ChatheadWrapper theme={props.theme}>
                      <InputWrapper>
                        {props.searchData.loading && <Loader theme={props.theme}/>}
                        <TextInput
                          placeholder={chatConstants.SEARCH_PLACEHOLDER}
                          theme={props.theme}
                          value={searchText}
                          onChange={handleSearchText}
                        />
                      </InputWrapper>
                      {getSearchedChatheads()}
                      {searchError && <NoChatheadsMessage theme={props.theme}>{searchError}</NoChatheadsMessage>}
                      </ChatheadWrapper>
                    }                    
                    <ChatWrapper {...props}>
                      {selectedChat
                      ? <React.Fragment>
                          <ChatWindow>
                          </ChatWindow>
                          <InputWrapper>
                            <TextInput
                            theme={props.theme}
                            value={message}
                            placeholder={chatConstants.MESSAGE_PLACEHOLDER}
                            onChange={handleMessage}/>
                          </InputWrapper>
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
