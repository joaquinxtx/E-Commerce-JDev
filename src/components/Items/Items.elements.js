import styled from 'styled-components';


export const ItemsContainer = styled.div`
    width: 300px;
    margin: 5px;
    display: flex;
    flex-flow: column;
    border-radius: 6px;
    box-shadow: 0 0 0.1em rgba(0, 0,0 , 0.2);
    background-color: rgb(97, 93, 93);
    cursor: pointer;
    transition: 0.7s;
    color: azure;
    overflow: hidden;
    text-decoration: none;
    &:hover{
        box-shadow: 0 0 1.5em rgba(241, 241, 241, 0.897);
        background-color: rgb(153, 25, 25); 
    }
    @media screen and (max-width:900px){
        aling-items:center;
    }    
`
export const ItemsInfo= styled.div`
    border-top: 1px solid rgb(97, 94, 94);
    padding: 1em;
    display: flex;
    flex-flow: column;
    *+*{
        margin:1em;
    }
   
`
export const ItemsImg = styled.img`
    width: 268px;
    height: 268px;

`
export const ItemsShipping = styled.span`
    background-color: rgb(41, 61, 172);
    color: azure;
    font-weight: 700;
    border-radius: 5px;
    max-width: max-content;
    padding: 0 0.3em;
    margin:auto;
    margin-top: 5px;
`
export const ItemsDescription = styled.span`
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;
    color: black;
    border-buttom:1px solid black;
    p{
        border-bottom: 1px solid rgb(250, 247, 247);
        color: white;
        margin: 0;
    }
`

export const ItemsPrice = styled.span`
    font-size: 2em;
    font-weight: 500;
    margin: 0.5em 0em 0em 0em;
    color: rgb(247, 239, 239);
    text-align: center;
`
export const ItemD = styled.span`
    background-color: rgba(31, 29, 29, 0.973);
    font-weight: 500;
    border-radius: 5px;
    font-size: larger;
    align-items: center;
    text-align: center;
`

