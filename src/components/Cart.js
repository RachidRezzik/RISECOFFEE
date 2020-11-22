import React, {useRef, useEffect} from 'react'
import {
    Link
} from 'react-router-dom'
import x_mark from '../images/x_mark.png'
import coffee_bag from '../images/coffee_bag.png'
import minus_sign from '../images/minus_sign.png'
import plus_sign from '../images/plus_sign.png'

function Cart(props) {
    let order_total = 0
    if (props.orders.length !== 0) {
        order_total = props.orders.reduce((total, order) => total + order.subtotal, 0).toFixed(2) 
    }

    const handleRemove = (item_title, item_quantity) =>{
        props.handleRemoveFromBag(item_title, props.orders, item_quantity)
    }

    const handleAdd = (item_title, item_quantity) => {
        props.handleAddQuantity(item_title, props.orders, item_quantity)
    }

    const handleSubtract = (item_title, item_quantity) => {
        props.handleSubtractQuantity(item_title, props.orders, item_quantity)

    }

    const handleCheckoutClose = () => {
        props.handleCartOpen()
        window.scrollTo({
            top: 0
        })
    }

    const node = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && event.target.id !== "shopping_bag_img" && event.target.id !== "cart_amount") {
                props.handleClickOutsideCart()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    return (
        <div ref={node} className={props.cartOpen ?"cart_container active" : "cart_container"}>
            <img src={x_mark} id="close_cart" alt="" onClick={() => props.handleCartOpen("x_mark")}/>
            {props.orders.length > 0 ? 
            <div style={{width: "100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%"}}>
            <h1 id="your_cart">Your Bag ({props.cartItems} Items)</h1>
            <div className="cart_items_container">
            {props.orders.map(order => {
                return (
                    <div className="cart_item">
                        <div style={{textAlign:"right"}}>
                            <img className="remove_item" src={x_mark} alt="" onClick={() => handleRemove(order.item_title, order.item_quantity)} />
                        </div>
                        <div className="title_subtotal">
                            <h2><img className="cart_bags" src={coffee_bag} alt="" /> {order.item_title}</h2>
                            <h2>${order.subtotal}</h2>
                        </div>
                        <div className="cart_item_quantity">
                            <img className="cart_add_sub" src={minus_sign} alt="" onClick={() => handleSubtract(order.item_title, order.item_quantity)}/>
                            <h2>{order.item_quantity}</h2>
                            <img className="cart_add_sub" src={plus_sign} alt="" onClick={() => handleAdd(order.item_title, order.item_quantity)}/>
                        </div>
                    </div>
                )   
            })}
            </div>
            <div className="checkout_div">
                    <h2>Order Total: ${order_total}</h2>
                    <Link to="/Checkout" onClick={handleCheckoutClose}>Checkout</Link>
            </div></div> 
            : <div className="empty_cart_div"><h2>Your Bag is Empty</h2><Link to="/Coffee" onClick={handleCheckoutClose}>Shop Coffee</Link></div>}
        </div>
    )
}

export default Cart
