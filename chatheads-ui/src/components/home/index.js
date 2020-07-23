import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import PageContainer from '../../common/components/page-container/index'
import AlertBox from '../../common/components/alert-box'
import homeConstants from '../../common/constants/homeConstants'
import {
    PageWrapper,
    LogoWrapper,
    ImageWrapper,
    Logo,
    Slogan,
    Loader,
    AlertWrapper
} from './styles'

const mapStateToProps = store => {
  return {
    homeData: store.homeData,
    signInData: store.signIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJwtToken: () => dispatch(actions.homeActions.getJwtToken())
  }
}

//if want to check loading, props.{reducer.name mapped in mapstatetoprops}.loading
//if error, props.{reducer.name mapped in mapstatetoprops}.status == 'failure'
// error message will be in props.{reducer.name mapped in mapstatetoprops}.data.data in case of backend error
// error message will be in props.{reducer.name mapped in mapstatetoprops}.data in case of axios error
//if success, props.{reducer.name mapped in mapstatetoprops}.status == 'succes
// success data will be in props.{reducer.name mapped in mapstatetoprops}.data in case of success

const Home = (props) => {

    const [showLoader, setShowLoader] = useState(false)
    const [error, setError] = useState({
      isAlert: false,
      message: ''
    })

    useEffect(()=>{
      props.getJwtToken()
    },[])

    useEffect(() => {
      if(props.homeData.loading){
        setShowLoader(true)
      }else{
        setShowLoader(false)
      }
    },[props.homeData.loading])

    useEffect(()=>{
      if(props.homeData.status==='failure'){
        if(props.homeData.data.data){
          setError({
            isAlert: true,
            message: props.homeData.data.data
          })
        } else{
          setError({
            isAlert: true,
            message: props.homeData.data
          })
        }
      }
    },[props.homeData.status])

    return(
      <React.Fragment>
        {showLoader && <Loader {...props}/>}
        <br/>
        <AlertWrapper>{error.isAlert && <AlertBox theme={props.theme}>{error.message}</AlertBox>}</AlertWrapper>
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
      </React.Fragment>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)