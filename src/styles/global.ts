import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
}

body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

    @media (max-width:500px){
        font: 400 12px Roboto, san-serif;

    }

}
`