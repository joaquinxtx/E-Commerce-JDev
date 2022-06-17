import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { ItemDetail } from '../ItemDetail/ItemDetail'



export const ItemDetailContainer = () => {
    const [product,setProduct] = useState({})
    const {detailId}= useParams()

    // custom hook
    
    useEffect(()=>{
        const db = getFirestore()
        const dbQuery = doc(db,'products',detailId)
        getDoc(dbQuery)
        .then(resp =>setProduct({id:resp.id, ...resp.data()}))
      },[detailId])
      
  return (
    <div>     
        <ItemDetail product ={product} /> 
    </div>
  )
}
