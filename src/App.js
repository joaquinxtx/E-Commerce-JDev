
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import { Cart } from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { MainPage } from './components/MainPage/MainPage';
import { NavBar } from "./components/NavBar/NavBar";
import { NavBarLate } from './components/NavBarLate/NavBarLate';
import CartContextProvider from './context/CartContext';

function App(){
  
    
    return(
        <BrowserRouter >

            <CartContextProvider>

                <div className="App">
                    <NavBar/>
                    <NavBarLate/>    
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path='/products/' element = {<ItemListContainer/>}/>
                        <Route path="/category/:id" element={<ItemListContainer/>}/>  
                        <Route path="/detail/:detailId" element ={<ItemDetailContainer/>}/>
                        <Route path="/cart/" element ={<Cart/>}/> 

                        <Route path="/*" element = { <Navigate to='/' replace  /> } />   
                    </Routes>               
                </div>

            </CartContextProvider>
        </BrowserRouter>
    )
    
}
export default App