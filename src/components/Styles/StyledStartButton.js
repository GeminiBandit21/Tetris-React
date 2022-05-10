import styled from 'styled-components';

export const StyledStartButton = styled.button`
box-sizing: border-box;
margin: 0 0 20px 0;
padding: 20px;
min-height: 30px;
width: 100%;
border-radius:20px;
border: none;
color: white;
background: #333;
font-family: Pixel, Arial, Helvetica, sans-serif;
font-size: 1rem;
outline: none;
cursor: pointer;
border-bottom: 4px solid #1c1c1c;
border-right: 2px solid #1c1c1c;

&:hover{ background-color:#03d3fc;
border-bottom: 4px solid #32bdd9;
border-right: 2px solid #32bdd9;
}
`