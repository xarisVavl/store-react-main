
import useFetch from ".//useFetch";
const ProductsList = (props) => {
  const isLoading=props.isLoading;
  const products= props.products;
  const handleAddProduct=props.handleAddProduct;










  return ( 
    <>
    {isLoading && <h1>Is Loading</h1>}
   { products &&  products.map((product) => (
    <div  className="card  p-3 m-3   "  key={product.id} >



    <img src={product.image} alt=""  className="   card-img object-fit-contain"/>


    <div className="card-body ">

    <p> {product.title}</p>
  <p className="card-text">{product.description}</p> 




    <div className="new-price">${product.price}</div>
    {/* <div className="old-price">${Math.floor(product.price+ product.price*0.3)}</div> */}
    </div>

    <div className="align-self-center">
    <button className="text-uppercase add-product-button" onClick={()=> handleAddProduct(product.id,product.price)} >
      
      Add to Cart
    </button>  
    </div>

  </div>
   ))}


   </>
   );
}

export default ProductsList;