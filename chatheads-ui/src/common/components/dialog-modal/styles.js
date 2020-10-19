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
    max-width: 400;
    min-height: 40vh;    
    padding: 10px;
    margin-top: 20vh;
    margin-left: 30%;
    margin-right: 30%;
    background-color: #fff;
    border: 5px solid ${styleVals.color.dullBlue};
    border-radius: 10px;
    box-shadow: ${styleVals.color.shadowColor}
`

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 20px;
    width: 100%;
    margin-top: ${styleVals.dimensions.spacing6};   
`
export const TitleSeparator = styled.div`
    margin-top: ${styleVals.dimensions.spacing16};
    margin-bottom: ${styleVals.dimensions.spacing16};
    border-bottom: 2px solid ${styleVals.color.light};
`
export const ModalTitle = styled(H1)`
    font-weight: 200;    
`
export const CloseButton = styled.span`
    margin-left: auto;
    margin-bottom: ${styleVals.dimensions.spacing10};
    cursor: pointer;
    display: inline;
`