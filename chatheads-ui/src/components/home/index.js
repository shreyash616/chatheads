import React from 'react'
import PageContainer from '../../common/components/page-container/index'
import homeConstants from '../../common/constants/homeConstants'
import {
    PageWrapper,
    LogoWrapper,
    ImageWrapper,
    Logo,
    Slogan
} from './styles'


const Home = (props) => {
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

export default Home