import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100%;
    min-height:100vh;
    background-color: ${props => props.theme.colors.backgrounddark};
    
    .initial{
        max-width:100vw;
    }
    .background{
        flex-direction:column;
        height:70vh;
        position:relative;
    }
    .imagemFundo{
        height:100%;
        width:100%;
        object-fit:cover;
        flex:none;
        position:absolute;
    }
    .primeira{
        animation: fadeIn 5s alternate infinite ease-in-out;
    }
    .boxInicio{
        margin:0 auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        width:60%;
        min-width: 320px;

        .frase{
        font-size:80%;
        background-color: ${props => props.theme.colors.textSecundary};
        } 
    }
    .logo{
        padding-top:0.5rem;
        width:55rem;
        text-align:center;
        
    }
    .boxCards{
        margin:0rem 0rem;
        width:100%;
        height:3rem;
        justify-content:space-around;
        
    }

    .card{
        margin:5px 0px 0px 0px;
        width:23%;
        height:100%;
        background-color: ${props => props.theme.colors.primary};
        text-align:center;
        justify-content:center;
        align-items:center;
        color: #fdfdfd;
        cursor: pointer;
        :hover{
            background-color:${props => props.theme.colors.alert};
            color: #fdfdfd;
        }
    }





    @media (max-width:500px){
        .logo{
            min-width:100%
        }
        .boxCards{
            flex-wrap:wrap;
        }
        .card{
            min-width:8rem;
        }

    }
   


    @keyframes fadeIn {
    0% {opacity:1;}
    100% {opacity:0;}
    }

    

`