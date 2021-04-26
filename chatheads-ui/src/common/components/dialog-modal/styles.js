import styled from 'styled-components'
import {H1} from '../typography'
import styleVals from '../../styleVals/global'

export const ModalWrapper = styled.div`
    background-color: rgba(220,220,220,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;       
`

export const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    min-height: 20vh;    
    padding: 10px;
    margin-top: 20vh;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #fff;
    border: 5px solid ${props => props.theme === 'dark'? styleVals.color.bestOrange : styleVals.color.ogBlue};
    border-radius: 10px;
    box-shadow: ${styleVals.color.shadowColor};
    font: ${styleVals.fonts.wordFont};
    font-weight: 600;
    @media ${styleVals.breakpoints.tabletLandscape}, ${styleVals.breakpoints.tabletPortrait} {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 20px;
    width: 100%;
    margin-top: ${styleVals.dimensions.spacing6};   
`
export const ModalFooter = styled.div`
    margin-top: auto;    
    display: flex;
    flex-direction: row;   
`
export const ButtonWrapper = styled.div`
    margin-left: auto;
    button{
        margin-left: ${styleVals.dimensions.spacing12};
        margin-right: ${styleVals.dimensions.spacing6};
    }
`
export const TitleSeparator = styled.div`
    position: relative;
    margin-top: ${styleVals.dimensions.spacing20};
    margin-bottom: ${styleVals.dimensions.spacing16};
    border-bottom: 2px solid #CDCDCD;
`
export const ModalTitle = styled(H1)`
    font-weight: 200;
    color: ${props => props.theme === 'dark'? styleVals.color.bestOrange : styleVals.color.ogBlue};
`
export const CloseButton = styled.span`
    margin-left: auto;
    margin-top: ${styleVals.dimensions.spacing0};
    cursor: pointer;
    display: inline;    
`