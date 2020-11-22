import React, {useState} from 'react'
import './App.css';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
//Components
import Home from './components/Home'
import About from './components/About'
import Coffee from './components/Coffee'
import Locations from './components/Locations'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState(0)
  const [cartOrders, setCartOrders] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  
  const newItemInOrder = (item_quantity, item_title) =>{
    let order_object = {}
    order_object.item_title = item_title
    order_object.item_quantity = Number(item_quantity)
    if (item_title !== "Texas Pecan"){
      order_object.subtotal = 9.99 * Number(item_quantity)
    } else {
      order_object.subtotal = 7.99 * Number(item_quantity)
    }
    setCartOrders(cartOrders.concat(order_object))
  }
  
  const handleAddToBag = (item_quantity, item_title) => {
    let items = Number(item_quantity)
    setCartItems(cartItems + items)
    if (cartOrders.length == 0){
      newItemInOrder(item_quantity, item_title)
    } else {
      let types_in_bag = []
      cartOrders.forEach(order => {
        types_in_bag.push(order.item_title)
      })
      cartOrders.forEach(order => {
        if (types_in_bag.includes(item_title) && item_title == order.item_title){
          order.item_quantity += Number(item_quantity)
          if (item_title !== "Texas Pecan"){
            order.subtotal += 9.99 * Number(item_quantity)
          } else {
            order.subtotal += 7.99 * Number(item_quantity)
          }
          setCartOrders(cartOrders)
        } else if (types_in_bag.includes(item_title) == false){
          newItemInOrder(item_quantity, item_title)
        } 
      })
    }
  }

  const handleRemoveFromBag = (item_title, orders, item_quantity) => {
    let order_index = orders.findIndex(order => order.item_title === item_title)
    let new_orders = orders.filter((order, idx) => idx !== order_index)
    setCartOrders(new_orders)
    setCartItems(cartItems - item_quantity)
  }

  const handleAddQuantity = (item_title, orders, item_quantity) => {
    let item_price = 9.99
    if (item_title === "Texas Pecan"){
      item_price = 7.99
    } 
    let order_index = orders.findIndex(order => order.item_title === item_title)
    orders[order_index].item_quantity = item_quantity + 1
    orders[order_index].subtotal = item_price * (item_quantity + 1)
    setCartOrders(orders)
    setCartItems(cartItems + 1)
  }

  const handleSubtractQuantity = (item_title, orders, item_quantity) => {
    let item_price = 9.99
    if (item_title === "Texas Pecan"){
      item_price = 7.99
    } 
    let order_index = orders.findIndex(order => order.item_title === item_title)
    if(item_quantity !== 0){
      orders[order_index].item_quantity = item_quantity - 1
      orders[order_index].subtotal = item_price * (item_quantity - 1)
      setCartItems(cartItems - 1)
    }
    setCartOrders(orders)
  }

  const handleCartOpen = () => {
    setCartOpen(!cartOpen)
  }

  const handleClearCart = () => {
    setCartOrders([])
    setCartItems(0)
  }


  return (
    <div className="App">
      <HashRouter basename="/">
        <Cart 
        orders={cartOrders}
        cartOpen={cartOpen}
        cartItems={cartItems}
        handleCartOpen={handleCartOpen}   
        handleRemoveFromBag={handleRemoveFromBag} 
        handleAddQuantity={handleAddQuantity}
        handleSubtractQuantity={handleSubtractQuantity}  
        />
        <Header 
        cartItems={cartItems}
        handleCartOpen={handleCartOpen}
        cartOpen={cartOpen}  
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Coffee" render={() => <Coffee handleAddToBag={handleAddToBag} />} />
          <Route exact path="/Locations" component={Locations} />
          <Route exact path="/Checkout" render={() => <Checkout orders={cartOrders}         cartItems={cartItems} handleClearCart={handleClearCart}/>} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
