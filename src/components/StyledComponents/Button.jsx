import styled from "styled-components";

const Button = styled.button`
    line-height: 1em;
    border-color: #4af626;
    border-width: 3px;
    border-style: solid;
    margin: 0 1rem;
    font-family: inherit;
    color: #4af626;
    background-color: #000000;
    padding: 5px;
    &:active {
        background-color: #4af626;
        color: #000000;
    }
` 

export default Button;