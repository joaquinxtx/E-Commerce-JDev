import { Link } from "react-router-dom"

import { useCartContext } from "../../context/CartContext"
import {Trolley } from "../Trolley/Trolley"

import './NavBar.css'


export const NavBar = () => {
  const{ totalQuantity,setSearch}=useCartContext()
  return (
    <nav className='navBar'>
      <Link to='/' className="link">
        <h1 className="titleNavBar">
          JDev
        </h1>
      </Link>
      
      <input type='text' 
        onChange={(e)=>setSearch(e.target.value)} 
        placeholder='Search Products' 
        className="seeker"
      />
        <div className="trolleyC">
          <span>
            {totalQuantity()!== 0 && totalQuantity()}
          </span>
          <Link to='/cart'>
            <Trolley/> 
          </Link>   
        </div>
    </nav>
  )
}

