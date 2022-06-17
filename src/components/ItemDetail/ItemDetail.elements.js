import styled from 'styled-components';

export const DeatilContainer= styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    margin-left: 120px;
    @media screen and (max-width:500px){
        margin-left: 0;
        margin:auto;
        margin-bottom:70px;
    }
    `
    export const DetailCard = styled.div`
    margin: auto;
    display: grid;
    flex-flow: row;
    border-radius: 6px;
    box-shadow: 0 0 0.1em rgba(0, 0,0 , 0.2);
    background-color: rgb(192, 189, 189);
    cursor: pointer;
    transition: 0.7s;
    color: azure;
    overflow: hidden;
    
    
    @media screen and (min-width:500px){
        grid-template-columns: 1fr 1fr;
        
        
    }
    `
    export const DeatilImg = styled.div``
    export const DeatilPick = styled.img`
    margin: 9px;
    width: 390px;
    height: 377px;
    border-radius:20px;
    p{
        color: black;
    }
    @media screen and (max-width:900px){
        width: 290px;
        height: 377px;
    }
    `
    export const DetailInfo = styled.div`
    margin-top: 9px;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 80%;
    background-color: aliceblue;
    padding: 1.1em;
    padding-top: 0;
    padding-buttom:0;
    display: flex;
    border: 0.5px solid rgb(235, 232, 232);
    flex-flow: column;
    margin:auto;
    bottom: 0;
    border-radius:20px;
    
`
export const DetailLocation = styled.span`
    margin-bottom: 9px;
    color: black;
    font-weight: 700;
    text-align: center;
    padding-bottom: 10px;

`
export const DeatilShipping = styled.span`
    background-color: rgb(68, 68, 228);
    font-weight: 600;
    border-radius: 5px;
    max-width: max-content;
    padding: 0 0.3em;
    margin: 0 auto;
    margin-bottom: 19px;
`
export const DetailDescription = styled.span`
p{
    font-size: 1.2em;
    color: black;  
    border-bottom: 2px solid black;
    font-weight: 500;
    text-align: center;
    margin:0;
    margin-bottom: 19px;
}
`
export const DetailPrice = styled.span`
    text-align: center;
    color: black;
    font-size: 2em;
    font-weight: 500;
    
    margin:0;
`
export const DeatilCounter = styled.div`
    padding-top:30px ;
`

export const DetailButtons=styled.div`
    button{
        width: 50%;
    }
`
