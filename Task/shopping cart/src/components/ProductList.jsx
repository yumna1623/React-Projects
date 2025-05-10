import React from 'react'

const ProductList = ({products , addToCart}) => {
  return (
    <div>
      <h1>Product List</h1>	
        <ul>
            {
                products.map((item)=>{
                    return(
                        <li key = {item.id}>
                            {item.name} {item.price} 
                        <button onClick={()=> addToCart(item)}>Add To Cart</button>
                        </li>
                    )

                })
            }
        </ul>
    </div>
  )
}

export default ProductList;
