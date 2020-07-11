import styled from 'styled-components'
import styleVals from '../../styleVals/global'

export const NavBar = styled.nav`    
    width: 100%;
    font-family: ${styleVals.fonts.segoeUI};
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
export const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`