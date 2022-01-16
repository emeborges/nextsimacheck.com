import styled from 'styled-components'



export const Container = styled.div`
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid ${props => props.theme.colors.text}; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin:0 auto;
    margin-top:30vh;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
