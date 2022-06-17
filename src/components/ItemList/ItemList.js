import { Items } from '../Items/Items'


export const ItemList = ({products}) => {
  return (
    products.map((prod)=> <Items
    key={prod.id}
    id={prod.id}
    name={prod.name}
    waist={prod.waist}
    category={prod.category}
    price ={prod.price}
    pick ={prod.pick}
     />)
  )
}