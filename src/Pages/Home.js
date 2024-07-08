
import { useEffect, useState } from "react";
import './Home.css'
import ProductsList from "../Components/ProductsList";
import useFetch from '../Components/useFetch';
import Cart from "./Cart";



const Home = () => {
  const {data: products ,isLoading} =useFetch();
  const [cart, setCart] = useState([]);
  const [showCart,setShowCart]=useState(false);
  const [quantity,setQuantity]=useState(0);
  const [totalCost,setTotalCost] =useState(0);

  const handleAddProduct = (id,price) => {
  
     const productToAdd = products.find(product => product.id === id);

 

   
    if (cart && cart.find(item => item.id === id)) {
  

      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        
      ));

    } else {
  
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
  
    }
    setQuantity(quantity+1)
    
setTotalCost(price)
  };


const handleRemoveProduct = (id) => {
  if (cart && cart.find(item => item.id === id)) {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCart(updatedCart.filter(item => item.quantity > 0));
    setQuantity(quantity - 1);
  }
};

const handleShowCard = () => {
  if(!showCart)
 { setShowCart(true);}

  else  setShowCart(false)
}

useEffect(() => {
  let total=0;

cart.forEach((item)=> {
  total+= item.price*item.quantity

})
setTotalCost(total.toFixed(2));
 
    
}, [cart]);

  return (  
    <>

    <button onClick={()=>handleShowCard()} className="cart-button position-fixed top-0 start-0 p-3 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg> <span >{quantity}</span></button>

   
<div className=" d-flex m-5 flex-wrap justify-content-center">

<ProductsList  handleAddProduct= {handleAddProduct} products ={products} isLoading= {isLoading}  showCart={showCart}/>
{showCart && <Cart  cart = {cart} handleShowCard={handleShowCard}  handleAddProduct= {handleAddProduct} handleRemoveProduct = {handleRemoveProduct} totalCost={totalCost}/> }
</div>


    </>
  );
}
 
export default Home;