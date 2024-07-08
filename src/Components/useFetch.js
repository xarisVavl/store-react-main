 import { useState, useEffect } from "react";
 const useFetch = () => {
  const [data, setData]=useState(null);
  const [isLoading,setIsLoading] = useState(true)




  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {

        setData(data);
        setIsLoading(false)
     
    })
   
      
  }, []);
  return {data, isLoading}
 }
 export default useFetch;