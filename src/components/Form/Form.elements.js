import styled from 'styled-components';


export const FormContainer =styled.div`
    margin-top: 20px;
`


export const FormForm =styled.form`
    width: 70%;
    max-width: 400px;
    background:  rgb(51, 51, 51);
    margin: auto;
    padding: 4.5em 3em;
    border-radius: 10px;
    text-align: center;
    color: aliceblue;
`

export const FormTitle=styled.h2`
    font-size: 2rem;
    margin-bottom: .5em;
`

export const FormParagraph =styled.p`
    font-weight: 300;
`

export const FormEstruc =styled.div`
    margin-top: 3em;
    display: grid;
    gap: 2.5em;
`

export const FormGroup =styled.div`
    position: relative;
`

export const FormInput =styled.input`
    width: 80%;
    background: none;
    color: rgba(247, 247, 252, 0.973);
    font-size: 1rem;
    padding: .6em 3em;
    border: none;
    outline: none;
    border-bottom: 1px solid #a10f0f6e;
    @media screen and (max-width:500px){
      width:69%;
    }
`

export const FormLabel =styled.label`
    color: rgba(240, 248, 255, 0.425);
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 6px;
    transform: translateY(10px);
    transition:  transform .5s, color .3s;
`

export const FormSpan =styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #a10f0f;
    transform: scale(0);
    transform: left bottom;
    transition: transform .4s;
`

export const FormButton =styled.button`
    background: #a10f0f;
    color: aliceblue;
    font-weight: 300;
    font-size: 1rem;
    padding: .8em 0;
    border: none;
    border-radius: .5em;
    cursor:pointer;
    transition:0.7s all ease;
    &:hover{
        background:rgba(139, 6, 6, 0.884);
        font-weight: 400;
    }
`