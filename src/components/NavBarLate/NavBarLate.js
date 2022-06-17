import { Link } from 'react-router-dom'

import './NavBarLate.css'


export const NavBarLate = () => {
  return (
    <div className='containerNav'>
        <div className='navBarLate'>
          <Link to='/products' className='link' >
            <div className='buttonsNavarLat' >
              All the products
            </div>
          </Link>
          <Link to='/category/women' className='link'>
            <div className='buttonsNavarLat'>
              Women
            </div>
          </Link>
          <Link to='/category/mens' className='link' >
            <div className='buttonsNavarLat'>
              Mens
            </div>
          </Link>
          <Link to='/category/unisex' className='link'>
            <div className='buttonsNavarLat'>
              Unisex
            </div>
          </Link>
        </div>  
    </div>
  )
}
