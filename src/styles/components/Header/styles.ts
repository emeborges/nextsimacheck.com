
import styled from 'styled-components'

export const Container = styled.nav`
width:100vw;
height:80px;
background-color:${props => props.theme.colors.text};
color: ${props => props.theme.colors.background};
box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.35);

.conteinerCentro{
  display:flex;
  align-items:center;
  justify-content: space-between;
  }

ul{
  list-style:none;
  display:flex;  
  width:30%;

  .menuItem{
    cursor: pointer;
    display:flex;
    flex-direction:column;
    padding-left:1rem;
    justify-content:space-around;
    align-items:center;
    text-align:center;
  }
}

.direito{
  justify-content: flex-end;

  .card{
    padding:1rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    line-height:1.5rem;
    h1{
      font-size:1rem;
      
    }
    span{
      font-size:70%;
      line-height:120%;
      background-color:${props => props.theme.colors.background};
      color:${props => props.theme.colors.text};
      width:100%;
    }

    :hover{
        font-weight:800;
        background-color:${props => props.theme.colors.background};
        color:${props => props.theme.colors.text};
      }
  }
}

.logo{
  width:18rem;
}
`
