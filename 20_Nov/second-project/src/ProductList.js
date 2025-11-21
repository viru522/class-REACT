import React from 'react'
import Product from './Product'

export default function ProductList() {
    const allProduct= [
        {'id':'101', 'name':'Smart Watch' },
        {'id':'102', 'name':'iPhone 17' },
        {'id':'103', 'name':'Laptop' },
        {'id':'104', 'name':'iPad' },
    ]
  return (

    <div> 
    <h3>List of products</h3>
    {/* <Product productName= {allProduct[0].name} /> */}
    { allProduct.map(product => <Product key = {product.id} productName={product.name} />)}
    </div>

  )
}
