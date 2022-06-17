import styled from 'styled-components';

export const Title = styled.h1`
    width: 100%;
    cursor: pointer;
    font-size: 80px;
    text-align: center;
    align-items: center;
    margin-left: 120px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #140a0a;
    background-color: #f3f3f3a8;
    transition: ease 0.8s;
    @media screen and (max-width:500px){
        margin-left: 0;
        font-size: 60px;
    }
`

export const CartContainer = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 100px;
    padding: 50px;
    background: rgb(51, 51, 51);;
    border: 0.4px solid rgb(73, 72, 72);
    border-radius: 10px;
    box-shadow: 0 0 0.4em rgba(183, 181, 181, 0.883);
    color: white;
`

export const CartItems = styled.div`
    display: flex;
`
export const CartButtons = styled.button`
    cursor: pointer;
    background: #a10f0f;
    color: aliceblue;
    font-weight: 300;
    font-size: 1rem;
    border: none;
    border-radius: .5em;
`