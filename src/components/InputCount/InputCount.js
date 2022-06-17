import { Link } from 'react-router-dom'

import '../css/InputCount.css'
import { InputCountButton, InputCountContainer } from './InputCount.elements'

export const InputCount = (e) => {
  return (
      <InputCountContainer>
      
      <Link to='/cart' >
        <InputCountButton >
          Go to the cart🛒
        </InputCountButton>
      </Link>
      
      </InputCountContainer>
    
  )
}
