import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const StyledNavbar = styled.div`  
    display: flex;
    flex-direction: row;    
    font-family: ${styleVals.fonts.wordFont};
    font-weight: bold;    
    padding: ${styleVals.dimensions.spacing16};    
    ${props => props.theme === 'dark'
    ? ({
        backgroundColor: styleVals.color.dark,
        color: styleVals.color.light
    })
    :({
        backgroundColor: styleVals.color.light,
        color: styleVals.color.dark
    })}
    &: hover{        
        color: ${props => props.theme === 'dark'
                ?styleVals.color.bestOrange
                :styleVals.color.ogBlue}
            }
    transition: 0.5s all linear;
`
export const NavbarBrand = styled.span`
    font-size: ${styleVals.dimensions.spacing22};
    margin-top: ${styleVals.dimensions.spacing4};
    color: ${props => props.theme === 'dark'
        ?styleVals.color.bestOrange
        :styleVals.color.ogBlue} !important;
    &: hover{
        cursor: pointer;        
    }
    transition: 0.5s all linear;
`
export const ActionButtons = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;    
`
export const Divider = styled.span`
    font-size: ${styleVals.dimensions.spacing24};
    margin-left: ${styleVals.dimensions.spacing4};
    margin-top: ${styleVals.dimensions.spacing4};
    margin-right: ${styleVals.dimensions.spacing12};
    color: ${props => props.theme === 'dark'
    ?styleVals.color.bestOrange
    :styleVals.color.ogBlue};
    transition: 0.5s all linear;
`
export const ThemeName = styled.span`
    font-family: ${styleVals.fonts.wordFont};
    font-weight: bold;
    color: ${props => props.theme === 'dark'
    ?styleVals.color.bestOrange
    :styleVals.color.ogBlue} !important;
    transition: 0.5s all linear;
`