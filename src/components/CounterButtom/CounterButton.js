
import './CounterButtons.css'


export const CounterButton = ({text,buttonClick,click}) => {
  return (
    <button className={buttonClick ? 'buttonCilick' : 'buttonReverse'} onClick={click}>
        {text}
    </button>
  )
}
