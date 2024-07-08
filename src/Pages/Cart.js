import './Cart.css'
const Cart = (props) => {
const cart=props.cart;

const handleShowCard=props.handleShowCard;
const handleAddProduct=props.handleAddProduct;
const handleRemoveProduct=props.handleRemoveProduct;
const totalCost=props.totalCost;
  return ( 
    <>
    <div className="wrapper" onClick={handleShowCard}></div>

    <div className="cart-tab ">
   
            <h1 className='d-flex justify-content-center' >My cart</h1>

            <div className="listCart overflow-y-auto">

            {cart.length===0 && <div className='d-flex justify-content-center'>Cart is empty. Please add something</div>}
            {cart && cart.map((cartItem) => (
          <div className="item" key={cartItem.id}> 
              <div className="image"><img  className="object-fit-contain"src={cartItem.image} alt="" /></div>
              <div className="name">{cartItem.title}</div>
              <div className="item-price">{(cartItem.price*cartItem.quantity).toFixed(2)}</div>
   <div>  
  <ul className="pagination">
  <li className="page-item">  <button className="page-link" onClick={()=>handleRemoveProduct(cartItem.id)}>-</button></li>
  <li className="page-item"><span className= "page-link">{cartItem.quantity}</span> </li>
  <li className="page-item">  <button className= "page-link"onClick={()=> handleAddProduct(cartItem.id, cartItem.price)}>+</button></li>
                  </ul></div>         
                  



              

    
  </div>
    ))}
    </div>
    <div className="total-price d-flex justify-content-center ">
       Total:${totalCost}
      </div>
</div>
    

    
    
    </>
   );
}
 
export default Cart;