import React, { useState } from 'react'
// import NavBar from './components/NavBar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
// import { Navbar } from 'react-bootstrap'

// 
const App = () => {

    const [cartItems, setCartItems] = useState([]) //array destructuring syntax useState hook return array with 2 elements 1)state 2)update state
    const products =[
        {id: 1, name: 'Laptop', price: 10},
        {id: 2, name: 'TV', price: 20},  
        {id: 3, name: 'Mobile Phone ', price: 30},
    ]

    const addToCart = (product) => {
        const isAlreadyInCart = cartItems.find((item) => item.id === product.id)
        if(isAlreadyInCart){
            alert('Product already in cart')
        }
        else{
            setCartItems([...cartItems, {...product , quantity:1}]) //spread operator to add new item to cart
        }
    }

    const removeFromCart = (id) => {
         const updateCart = cartItems.filter((item) => item.id !== id)
         setCartItems(updateCart)
         alert("items deleted sucessfully")
    }

    const IncrementQty = (id) => {
        const updateCart = cartItems.map((item)=>item.id === id ? {...item , quantity: item.quantity + 1} : item)
        setCartItems(updateCart)
    }
    const DecrementQty = (id) => {
        const updateCart = cartItems.map((item)=>item.id === id ? {...item , quantity: item.quantity - 1} : item)
        setCartItems(updateCart)
    }
    // const Total()

  return (
    <>
    {/* <NavBar/> */}
      <h1>Shopping Cart <i class="fa-solid fa-cart-shopping"></i>({cartItems.length} {cartItems.length === 1 ? "item" : "items"})</h1>
      <ProductList products = {products}  addToCart = {addToCart} />
      <Cart cartItems = {cartItems} removeFromCart = {removeFromCart} IncrementQty={IncrementQty} DecrementQty={DecrementQty} />
    </>
  )
}

export default App
