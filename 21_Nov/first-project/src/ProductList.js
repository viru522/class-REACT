import React, { useEffect, useState } from 'react'
import Product from './Product'

export default function ProductList() {
    // let allProducts= [];

  const [allProducts, setAllProducts] = useState([]);
  const [count,setcount] = useState(0);
  const updateCount = ()=> {
    setcount(count+1);
  }
    // const fetchData =() =>{
    //     fetch('http://localhost:3000/data.json')
    //     .then(resp => resp.json())
    //     .then(data =>{ 
    //         console.log(data);
    //         setAllProducts(data.allProducts);
            
    //     });
    // }
    // fetchData();

    // useEffect excutes the callback function first time. and then if there is any change in any of the dependency list variables, every time the callback will get executed e.g. 
    // 1. useEffect(callback, [count]) --> use effect is dependent on count. whenever count will be excuted again.
    // useEffect(callback, []) --> Empty DL. the callback will be excuted for the first time. and as the DL is empty, callback will not be excuted again.
    // 3. useEffect(callback, [allProducts, count]) --> DL is not passed, by default all states and props are the DL
    // useEffect(useCallback, [allProducts,count])
    // useEffect(callback, Dependency_list)
    useEffect(()=>{
      fetch('http://localhost:3000/data.json')
        .then(resp => resp.json())
        .then(data =>{ 
            console.log(data);
            setAllProducts(data.allProducts);
        });
}, [count])


  return (
    <>
    <div>List of Products</div>
    <button onClick={updateCount}> {count} </button>
   {allProducts.map(product => <Product key ={Product.id} productName={product.name} />)}
    </>
  )
}
