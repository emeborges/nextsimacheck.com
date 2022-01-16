
import styled from 'styled-components'



export const ConteinerSlot = styled.div`
    margin-top:1rem;
    margin-right:0.5rem;
    padding:1rem;
    width:32%;
    background-color:${props => props.theme.colors.slots};
    border-radius:5px;
    box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.darkShadow};
`
