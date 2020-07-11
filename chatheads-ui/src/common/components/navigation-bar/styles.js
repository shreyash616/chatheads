import styled from 'styled-components'
import styleVals from '../../styleVals/global'

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
`
export const NavbarBrand = styled.span`
    font-size: ${styleVals.dimensions.spacing22};
    &: hover{
        cursor: pointer;
    }
`

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`