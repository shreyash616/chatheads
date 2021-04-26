import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    ModalWrapper,
    ModalStyle,
    ModalHeader,
    CloseButton,
    ModalTitle,
    TitleSeparator,
    ModalFooter,
    ButtonWrapper
} from './styles'
import Button from '../button/index'

const DialogModal = (props) => {

    return (
      <ModalWrapper id={`${props.id}-modal`}>
        <ModalStyle theme={props.theme}>
          <ModalHeader>
            {props.showTitle && <ModalTitle theme={props.theme} id={`${props.id}-modal-title`} tabIndex={-1}>{props.title}</ModalTitle>}            
            {props.showClose &&<CloseButton tabIndex={0} role='button' onKeyPress={props.onClose} onClick={props.onClose}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></CloseButton>}
          </ModalHeader>
          {!!props.title && <TitleSeparator/>}
          {props.children}
          <ModalFooter>          
            <ButtonWrapper>
            {props.showSecondaryButton && <Button onClick={props.onSecondaryButtonClick} theme={props.theme} appearance='secondary'>{props.secondaryButtonText}</Button>}
            {props.showPrimaryButton && <Button onClick={props.onPrimaryButtonClick} theme={props.theme} appearance='primary'>{props.primaryButtonText}</Button>}
            </ButtonWrapper>
          </ModalFooter>
        </ModalStyle>
      </ModalWrapper>
    )
} 

DialogModal.defaultProps = {    
    showClose: false,
    showTitle: false
}

DialogModal.propTypes = {
    showClose: PropTypes.bool,
    showTitle: PropTypes.bool,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    showPrimaryButton: PropTypes.bool,
    showSecondaryButton: PropTypes.bool,
    onPrimaryButtonClick: PropTypes.func,
    onSecondaryButtonClick: PropTypes.func,
    primaryButtonText: PropTypes.string,
    secondaryButtonText: PropTypes.string

}

export default DialogModal