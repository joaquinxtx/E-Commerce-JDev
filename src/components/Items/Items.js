import { Link } from 'react-router-dom'

import './Items.css'
import { ItemD, ItemsContainer, ItemsDescription, ItemsImg, ItemsInfo, ItemsPrice, ItemsShipping } from './Items.elements'

export const Items = ({name,id,price,pick}) => {
  return (
    <Link className='link' to={`/detail/${id}`}>
        <ItemsContainer
        key={id}> 
            <ItemsInfo>
              <ItemsImg src={pick}/>
              <ItemsShipping>
                Shipping normally⚡ 
              </ItemsShipping>        
              <div>
                <ItemsDescription>
                  <p>
                    {name}
                  </p>
                </ItemsDescription>
              </div>
              <ItemsPrice>
                {price}$
              </ItemsPrice>
                <ItemD>
                  <p>
                    See product 
                  </p>
                </ItemD>     
            </ItemsInfo>      
        </ItemsContainer>
    </Link>
    )
}
  