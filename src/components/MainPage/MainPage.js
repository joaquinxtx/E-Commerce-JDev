import { Link } from 'react-router-dom'

import { MainCategory } from '../MainCategory/MainCategory'

export const MainPage = () => {
  return (
    <div>
      <Link to='/products' className='link'>
        <MainCategory 
        title='All the products'
        imag='https://media.revistagq.com/photos/5ca5f447e6e7b7fb7ce8913b/16:9/w_1280,c_limit/trucos_consejos_empezar_coleccion_zapatillas_sneakers_adidas_air_jordan_nike_vans_converse_puma_new_balance_9512.jpg'/> 
        
      </Link>
      <Link to='/category/women' className='link'>
        <MainCategory
        title='Women'
        imag='https://www.neo2.com/wp-content/uploads/NikeIntl_Womens_Pegasus_92_original-11.jpg'/>
        
      </Link>
      <Link to='/category/mens' className='link'>
        <MainCategory
        title='Mens'
        imag='https://www.neo2.com/wp-content/uploads/Nike_International_Matt_Centrowitz2_1.jpg'/>
        
      </Link>
      <Link to='/category/unisex' className='link'>
        <MainCategory
        title='Unisex'
        imag='https://www.polinesia.es/es-es/blog/wp-content/uploads/2018/10/look-urbano-e1540802560575.jpg'/>  
      </Link>
    </div>
  )
}
