import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import PageContainer from '../../common/components/page-container/index'
import homeConstants from '../../common/constants/homeConstants'
import {
    PageWrapper,
    LogoWrapper,
    ImageWrapper,
    Logo,
    Slogan
} from './styles'

const mapStateToProps = store => {
  return {
    homeData: store.homeData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJwtToken: () => dispatch(actions.homeActions.getJwtToken())
  }
}

const Home = (props) => {

    useEffect(()=> {
      props.getJwtToken()
    },[])

    return(
        <PageContainer {...props}>            
            <PageWrapper>
              <LogoWrapper>
                <Logo theme = {props.theme}>{homeConstants.LOGO}</Logo>
                <Slogan theme = {props.theme}>{homeConstants.SLOGAN_PART1}</Slogan>
                <Slogan theme = {props.theme}>{homeConstants.SLOGAN_PART2}</Slogan>
              </LogoWrapper>
              <ImageWrapper>
              </ImageWrapper>
            </PageWrapper>
        </PageContainer>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)