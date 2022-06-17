import { useState } from "react";
import { CounterButton } from "../CounterButtom/CounterButton";


import { CounterAdd, CounterClicks, CounterContainer, CounterDiv, CounterStock } from "./Counter.elements";



export const Counter = ({stock,initial,onAdd}) => {
  const[counter,setCounter]=useState(initial)

  function reverseCounter (){  
    if (counter > 1){
      setCounter(counter - 1)
    }
  }
  function click (){
    if(counter < stock){
      setCounter (counter + 1)
    }
  }

  return (
    <CounterContainer >
      <CounterStock>
        stock ={stock}💥
      </CounterStock>
      <CounterClicks>
        <CounterButton
          text='-'
          buttonClick={false}
          click={reverseCounter}/>
        <CounterDiv>
          {counter}
        </CounterDiv>
        <CounterButton
          text='+'
          buttonClick={true}
          click={click}/>
      </CounterClicks>
      <CounterAdd >
        <button  onClick={()=> onAdd(counter)}>
          Add to cart
        </button>          
      </CounterAdd>

    </CounterContainer>
  )
}
