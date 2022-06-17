import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider=({children})=>{
    const[cartList,setCartList]=useState([])

    const[search,setSearch]=useState('')

    function addToCart(item){
        const index = cartList.findIndex(product => product.id === item.id)
        if(index !== -1){
            const cantOld = cartList[index].cant
            cartList[index].cant = cantOld + item.cant
            setCartList([...cartList])
        }else{
            setCartList([
                ...cartList,
                item      
            ])
                                               
        }
    }
    
    const removeItem = (id)=>{
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const totalQuantity = ()=>{
        return cartList.reduce((counter ,prod)=>counter += prod.cant,0)
    }
    
    const totalPrice = ()=>{
        return cartList.reduce((counter ,prod)=>counter += (prod.cant*prod.price),0)

    }
    const clearCart =()=>{
        setCartList([])
    }

    


    return(
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            clearCart,
            removeItem,
            totalQuantity,
            totalPrice,
            search,
            setSearch
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider