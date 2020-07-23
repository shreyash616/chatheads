import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import chatConstants from '../../common/constants/chatConstants'
import PageContainer from '../../common/components/page-container/index'

import {
    PageWrapper,
    DetailsWrapper,
    ConversationWrapper,
    ChatheadWrapper,
    ChatWrapper
} from './styles'

const mapStateToProps = store => ({
  signInData: store.signIn   
})

const Chats = (props) => {  
  
    return(
        <React.Fragment>
          {props.signInData.data
            ?props.signInData.data.data.userData             
            ?<React.Fragment>
              <PageContainer {...props}>            
                <PageWrapper {...props}>
                  <DetailsWrapper {...props}>                                
                  </DetailsWrapper>
                  <ConversationWrapper {...props}>
                    <ChatheadWrapper {...props}>                  
                    </ChatheadWrapper>
                    <ChatWrapper {...props}>
                    </ChatWrapper>
                  </ConversationWrapper>
                </PageWrapper>
              </PageContainer>
            </React.Fragment>
            :<Redirect to='/home'/>:<Redirect to='/home'/>}
        </React.Fragment>
      )
  }
  
export default connect(mapStateToProps,null)(Chats)
