import React, { useEffect,useState }  from 'react'
import ProductBox from './components/ProductBox/ProductBox'
import './App.css';

function App() {
   const [products,setProducts] = useState([])

  const getProducts = async () =>{
    await fetch('https://dummyjson.com/products')
    .then((res)=> res.json())
    .then((data)=> setProducts(data.products))
  }
  console.log(products);

  useEffect(()=>{
    getProducts()
  },[])

  return (
     <div className='App'>
      <div className='page_title'>
        <h2>Products</h2>
      </div>
      <div className='display_products'>
        {
          products.map((product)=>{
            return <ProductBox key={product.id} product ={product}/>
          })
        }
      </div>
     </div>
  );
}

export default App;
