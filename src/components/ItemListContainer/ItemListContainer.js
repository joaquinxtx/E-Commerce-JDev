import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

import { useCartContext } from '../../context/CartContext'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [products,setProducts]= useState([])
    const[loading,setLoading]=useState(true)
    const{search}=useCartContext()
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
          const queryCollection = collection(db ,'products') 
          const queryCollectionFilter= id ? query(queryCollection,where('category','==',id)) : queryCollection 
          getDocs(queryCollectionFilter)
          .then(resp => {
            let productsFirebase = resp.docs.map(product => ({ id: product.id, ...product.data() }))
            if (search.length > 0) {
              const filterProds = productsFirebase.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()))
              setProducts(filterProds)
            }
            else {
              setProducts(productsFirebase)
            }
          })
          .catch((err)=>console.log(err))
         .finally(()=>setLoading(false))
         
    },[id,search])

  return (
    <div>
        <h1 className='title'>
          Products
        </h1>
        <div className='containerItemList'>
            {loading ?
            <div className='loader'/> 
            : 
            <ItemList products={products}/>
            }          
        </div>
    </div>
  )
}
