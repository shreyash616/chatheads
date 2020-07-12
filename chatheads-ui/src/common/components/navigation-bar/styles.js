import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const Navbar = styled.div`    
    width: 100%;
    font-family: ${styleVals.fonts.wordFont};
    font-weight: bold;
    vertical-align: center;
    padding: ${styleVals.dimensions.spacing16};
    ${props => props.colorMode === 'dark'
    ? ({
        backgroundColor: styleVals.color.dark,
        color: styleVals.color.light
    })
    :({
        backgroundColor: styleVals.color.light,
        color: styleVals.color.dark
    })}
    &: hover{        
        color: ${props => props.colorMode === 'dark'
                ?styleVals.color.bestOrange
                :styleVals.color.ogBlue}
            }
`
export const NavbarBrand = styled.span`
    font-size: ${styleVals.dimensions.spacing22};
    color: ${props => props.colorMode === 'dark'
        ?styleVals.color.bestOrange
        :styleVals.color.ogBlue} !important;
    &: hover{
        cursor: pointer;        
    }
`
