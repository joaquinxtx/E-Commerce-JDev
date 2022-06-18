import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import swal from 'sweetalert'
import { CartButtons, CartContainer, CartEmpty, CartEmptyimg, CartItems, CartLink,  Title } from './Cart.elements'
import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'


export const Cart = () => {
  const{cartList,removeItem,clearCart,totalPrice}= useCartContext()

  const [form,setForm]= useState({
    email:'',
    name:'',
    number:''

  })

  const[setOrderId]= useState('')

  const handleChange= (e)=>{
      setForm({
          ...form,
          [e.target.name]:e.target.value,
        })   
      } 
      
      const checkout = async (e) => {
        e.preventDefault()
        let orders={}
        
        orders.buyer = form
        orders.total =totalPrice()
        
        orders.item = cartList.map(cartProd=>{
          const id = cartProd.id
          const name=cartProd.name
          const cant = cartProd.cant
          const price = cartProd.price * cartProd.cant
          return{id,name,cant,price}
        })
        
       
    const db =getFirestore()
      
    const orderColletion = collection(db,'orders')
    await addDoc(orderColletion, orders)
      .then(resp=> setOrderId(resp.id))
      .catch(err=>console.log(err))
    
    const queryCollectionStock= collection(db,'products')
    const queryUpdateStock = query(
      queryCollectionStock,
      where(documentId(), 'in', cartList.map(it => it.id))
    )
    const batch = writeBatch(db)
    await getDocs(queryUpdateStock)
      .then(resp=> resp.docs.forEach(res=>batch.update(res.ref,{
        stock: res.data().stock - cartList.find(item => item.id === res.id).cant
      })))
      .finally(()=> swal({
       title: "Purchase completed",
       text:"Thanks for your purchase",
       icon:"success",
       button:"To accept"
      }),clearCart(),)
    batch.commit()
}
  return (<>
            <Title>
              Cart
            </Title>
            {cartList.length ? (
              <> 
                <CartContainer>
                  <CartItems>
                    {cartList.map(product =><div key={product.id}>
                      <li> 
                        -Product : {product.name}  |
                        -Price : {product.price} $  |
                        -Waist : {product.waist}   | 
                        -Quantity : {product.cant}
                      </li>
                      <CartButtons onClick={()=> removeItem(product.id)}>
                        X
                      </CartButtons>
                    </div>)}
                  </CartItems>
                  <h2>
                    The total price is : {totalPrice()}$ 
                  </h2>
                  <CartButtons onClick={()=>clearCart()}>
                    Empty Cart🗑
                  </CartButtons>  
                </CartContainer>
                <Form form={form}  handleChange={handleChange} checkout={checkout} submitProd='Finish buying' />
              </>
            )
            :
            (
              <CartEmpty>
              <Link to={"/"}>
                <CartEmptyimg src={'https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg'} />
                
              </Link>
            </CartEmpty>
            )}

          </>
  )
}
