import React, {useState} from 'react'
import { useForm } from "react-hook-form";
//Images
import free_coffee from '../images/free_coffee.jpg'


function Checkout(props) {
    const order_total = props.orders.reduce((total, order) => total + order.subtotal, 0).toFixed(2)
    const [orderStep, setOrderStep] = useState("summary")

    const { register, handleSubmit,  errors } = useForm();
    const zipIsNumber = (ZIP) => new RegExp("[0-9]{5}").test(ZIP)

    const onSubmit = data => {
        setOrderStep("payment")
        window.scrollTo({
            top: 0
        })
    }

    const handlePayment = () => {
        setOrderStep("confirmation")
        props.handleClearCart()
    }

    return (
        <div>
            {orderStep === "summary" ? 
            <div className="checkout_container">
                <div className="checkout_procedure">
                    <span id="active_step">Order/Shipping</span>➔
                    <span>Payment</span>➔
                    <span>Confirmation</span>
                </div>
                <div className="order_summary">
                    <h1 style={{marginBottom: "15px"}}>Order Summary</h1>
                    {props.orders.map(order => {
                        return (
                            <div className="checkout_item">
                                <p>{order.item_title}({order.item_quantity})</p>
                                <p>${order.subtotal}</p>
                            </div>
                        )
                    })}
                    <div style={{marginTop: "30px"}} className="order_summary_div">
                        <p>{props.cartItems} ITEMS</p>
                        <p>${order_total}</p>
                    </div>
                    <div className="order_summary_div">
                        <p>DELIVERY</p>
                        <p>FREE</p>
                    </div>
                    <div className="order_summary_div">
                        <p>Sales Tax</p>
                        <p>-</p>
                    </div>
                    <div className="order_summary_div">
                        <h2>TOTAL</h2>
                        <h2 >${order_total}</h2>
                    </div>
                </div>
                <form className="shipping_container" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Shipping Details</h1>
                    <h4>Contact Info:</h4>
                    <div className="input_container" style={{width: "100%",  display:"flex", flexWrap:"wrap"}}>
                        <div className="input_error" style={InputStyle}>
                            <input ref={register({ required: true })} name="first_name" type="text" placeholder="First Name" />
                            {errors.first_name && <p className="error">Required</p>}
                        </div>
                        <div className="input_error" style={InputStyle}>
                            <input ref={register({ required: true })} name="last_name" type="text" placeholder="Last Name" />
                            {errors.last_name && <p className="error">Required</p>}
                        </div>
                        <div className="input_error" style={InputStyle}>
                            <input ref={register({ required: true })} name="email" type="email" placeholder="Email" />
                            {errors.email && <p className="error">Required</p>}
                        </div>
                        <div className="input_error" style={{width: "48%", display:"block", height: "60px",flexWrap: "wrap",overflow: "hidden"}}>
                            <input ref={register({ required: true})} name="phone" type="phone" placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                            <p style={{textAlign:"left", fontSize: "8.5px"}}>XXX-XXX-XXXX</p>
                            {errors.phone && errors.phone.type == "required" &&<p className="error">Required</p>}
                        </div>
                    </div>
                    <h4>Address:</h4>
                    <div>
                        
                        
                        <div className="input_error" style={{width: "75%", 
                        display:"block", height: "50px",flexWrap: "wrap",overflow: "hidden"}}>
                            <input ref={register({ required: true })} name="street" type="text" placeholder="Street" />
                            {errors.street && <p className="error">Required</p>}
                        </div>
                        <div className="input_error" style={{width: "22.5%", 
                        display:"block", height: "50px",flexWrap: "wrap",overflow: "hidden"}}>
                            <select name="state" id="state" placeholder="State" ref={register({ required: true})}>
                                <option disabled  selected value="" >State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            {errors.state && <p className="error">Required</p>}
                        </div>
                        <div className="input_error" style={InputStyle}>
                            <input ref={register({ required: true })} name="city" type="text" placeholder="City" />
                            {errors.city && <p className="error">Required</p>}
                        </div>
                        <div className="input_error" style={InputStyle}>
                            <input ref={register({ required: true, minLength: 5, maxLength: 5, validate: zipIsNumber})} name="ZIP" type="text" placeholder="ZIP" />
                            {errors.ZIP && errors.ZIP.type == "required" && <p className="error">Required</p>}
                            {errors.ZIP && errors.ZIP.type == "minLength" && <p className="error">Invalid ZIP</p>}
                            {errors.ZIP && errors.ZIP.type == "maxLength" && <p className="error">Invalid ZIP</p>}
                            {errors.ZIP && errors.ZIP.type == "validate" && <p className="error">ZIP Must be Numerical</p>}
                        </div>
                    </div>
                    <input id="payment" type="submit" value="Continue to Payment" />
                </form>
            </div> : orderStep === "payment" ? 
            <div className="checkout_container2">
                <div className="checkout_procedure2">
                    <span>Order/Shipping</span>➔
                    <span id="active_step">Payment</span>➔
                    <span>Confirmation</span>
                </div>
                <h2>Hey, Guess What?? Your Order is FREE (Yes, FREE as in FREE) for Being an Awesome First-Time Customer! </h2>
                <img id="free_coffee" src={free_coffee} alt="" />
                <h2>We're Confident You'll be Back!!</h2>
                <button onClick={handlePayment}>Place Your Order</button>
            </div> :
            <div className="checkout_container2">
                <div className="checkout_procedure2">
                    <span>Order/Shipping</span>➔
                    <span>Payment</span>➔
                    <span id="active_step">Confirmation</span>
                </div> 
                <h2>Your Order Has Been Placed!!! <br></br><br></br>Thank You For Choosing Rise Coffee!</h2>
            </div>
            }
        </div>
    )
}


const InputStyle = {
    width: "48%", 
    display:"block", 
    height: "45px",
    flexWrap: "wrap",
    overflow: "hidden"
}

export default Checkout