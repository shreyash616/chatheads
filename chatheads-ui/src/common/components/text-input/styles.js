import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const InputTextWrapper = styled.div`
    display: flex;    
    flex-direction: column;        
`
export const Label = styled.span`
    font-family: ${styleVals.fonts.wordFont};
    color: ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    font-size: ${styleVals.dimensions.spacing16};
    margin-bottom: ${styleVals.dimensions.spacing12};
`
export const Starred = styled.sup`
    color: red;
    font-size: ${styleVals.dimensions.spacing16};
`
export const StyledTextInput = styled.input`
    font-family: ${styleVals.fonts.wordFont};
    font-weight: bold;
    padding: ${styleVals.dimensions.spacing12};
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing8};    
    outline: none;
`
export const PasswordWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;    
`
export const PasswordInputWithToggleSwitch = styled.input`
    font-family: ${styleVals.fonts.wordFont};
    font-weight: bold;
    border: 2px solid ${props=>props.theme==='dark'?styleVals.color.bestOrange:styleVals.color.ogBlue};
    border-radius: ${styleVals.dimensions.spacing8};
    padding: ${styleVals.dimensions.spacing12};    
    width:100%;                
`
export const ShowPasswordToggleSwitchWrapper = styled.button`
    position: absolute;
    height: ${styleVals.dimensions.spacing0};
    right: ${styleVals.dimensions.spacing4};
    top: ${styleVals.dimensions.spacing8};
    background: white;    
    border:none;
    outline: none;     
`