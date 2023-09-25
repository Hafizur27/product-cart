import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard";

const HomePage = () => {
    const [products, SetProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => SetProducts(data))
    },[]);
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {
            products?.map((product)=> <ProductCard key={product.id} product={product} />)
        }
    </div>
  )
}

export default HomePage