
import { Link } from 'react-router-dom';
import { useContext } from 'react'


import { CartContext } from '../../context/CartContext';
import { DeatilContainer, DeatilCounter, DeatilImg, DeatilPick, DeatilShipping, DetailButtons, DetailCard, DetailDescription, DetailInfo, DetailLocation, DetailPrice } from './ItemDetail.elements';

import { Counter } from '../Counter/Counter';





export const ItemDetail = ({product} ) => {

  const {name,waist,stock, price,pick} = product
  
  const {addToCart }= useContext(CartContext)
  const onAdd =(cant)=>{
    addToCart({...product,cant})
    
  }
  

  return (
    <>
        <h1 className='title'>
          Product Detail
        </h1>
      <DeatilContainer>
          <DetailCard>
            <DeatilImg>
              <DeatilPick src={pick}/>
            </DeatilImg>
            <DetailInfo>
              <DetailLocation>
                Rio gallegos 📌 
              </DetailLocation>   
              <DeatilShipping >
                Shipping normally⚡
              </DeatilShipping>
              <div >
                <DetailDescription>
                <p>
                  {name} ,
                  Waist :{waist}
                </p>
                </DetailDescription>
              </div>
              <DetailPrice>
                {price}$
              </DetailPrice>
              <DeatilCounter>
                <Counter
                initial={1}
                stock={stock}
                onAdd={onAdd} />
              </DeatilCounter>
              <DetailButtons>
              <Link to='/cart' >
                <button>
                    Go to the cart
                </button>
              </Link>
              <Link to='/'>
                  <button>
                      Products
                  </button>
              </Link>
              </DetailButtons>   
            </DetailInfo>
         </DetailCard>
        </DeatilContainer>
    </>
  )
}
