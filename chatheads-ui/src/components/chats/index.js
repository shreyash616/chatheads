import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import chatConstants from '../../common/constants/chatConstants'
import {withStyles} from '@material-ui/core/styles'
import PageContainer from '../../common/components/page-container/index'

import {
    PageWrapper,
    DetailsWrapper,
    ConversationWrapper,
    ChatheadWrapper,
    ChatWrapper
} from './styles'

const Chat = (props) => {
    return(
        <React.Fragment>
          <PageContainer {...props}>            
            <PageWrapper >
              <DetailsWrapper >
                <h1>Details</h1>
              </DetailsWrapper>
              <ConversationWrapper >
                <ChatheadWrapper >
                  <h1>Chatheads</h1>
                  <h3>Sona</h3>
                  <h3>Ankit</h3>
                  <h3>Nalu</h3>
                  <h3>Srinu</h3>
                  <h3>Ankit Whatsapp</h3>
                </ChatheadWrapper>
                <ChatWrapper >
                  <h1>Chats</h1>
                  <h3>Sona</h3>
                  <h3>Ankit</h3>
                </ChatWrapper>
              </ConversationWrapper>
            </PageWrapper>
          </PageContainer>
        </React.Fragment>
      )
  }
  
export default Chat
