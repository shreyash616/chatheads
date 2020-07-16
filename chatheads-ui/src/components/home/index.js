import React from 'react'
import PageContainer from '../../common/components/page-container/index'
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
                    <Logo theme = {props.theme}>Chatheads</Logo>
                    <Slogan theme = {props.theme}>A Free messaging service for all</Slogan>
                </LogoWrapper>
                <ImageWrapper>
                </ImageWrapper>
            </PageWrapper>
        </PageContainer>
    )
}

export default Home