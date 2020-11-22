import React from 'react'
//Images
import coffee_week from '../images/coffee_week.jpg'
import coffee_bag from '../images/coffee_bag.png'
import AddToBag from './AddToBag'

export default function Coffee(props) {
    return (
        <div>
            <div className="coffee_rise">
                <h1>Shop Rise Coffee</h1>
                <h4>Coffee of the Week:</h4>
                <div className="coffee_of_week">
                    <div className="week_price">
                        <p>Get Now For 20% Less Than Regular Price!</p>
                        <h3>Price: <span id="regular_price">$9.99</span> <span id="sale_price">$7.99</span> </h3>
                        <span style={{color:"goldenrod", fontSize:"17.5px"}} >Pick Some Up Below!</span>
                    </div>
                    <div className="week_img">
                        <h4>Texas Pecan</h4>
                        <img src={coffee_week} alt="" />
                    </div>
                </div>
            </div>
            <div className="other_blends">
                <h1>Rise Coffee</h1>
                <h3>(All Bags are 12oz)</h3>
                <div className="blends_container">
                    <div className="blend">
                        <h1>Colombian</h1>
                        <img src={coffee_bag} alt="" />
                        <h3>Price: $9.99</h3>
                        <AddToBag coffeeType="Colombian"
                        handleAddToBag={props.handleAddToBag}
                        />
                    </div>
                    <div id="texas_pecan" className="blend">
                        <h1>Texas Pecan</h1>
                        <img src={coffee_bag} alt="" />
                        <h3>Price: <span style={{textDecoration: "line-through"}}>$9.99</span> <span style={{color:'red'}}>$7.99</span></h3>
                        <AddToBag coffeeType="Texas Pecan"
                        handleAddToBag={props.handleAddToBag}/>
                    </div>
                    <div className="blend">
                        <h1>House Blend</h1>
                        <img src={coffee_bag} alt="" />
                        <h3>Price: $9.99</h3>
                        <AddToBag coffeeType="House Blend"
                        handleAddToBag={props.handleAddToBag}/>
                    </div>
                    <div className="blend">
                        <h1>Pumpkin Spice</h1>
                        <img src={coffee_bag} alt="" />
                        <h3>Price: $9.99</h3>
                        <AddToBag coffeeType="Pumpkin Spice"
                        handleAddToBag={props.handleAddToBag}
                        />
                    </div>
                    <div className="blend">
                        <h1>French Roast</h1>
                        <img src={coffee_bag} alt="" />
                        <h3>Price: $9.99</h3>
                        <AddToBag coffeeType="French Roast"
                        handleAddToBag={props.handleAddToBag}/>
                    </div>
                    <div className="blend">
                        <h1>Rise Medium Roast</h1>
                        <img src={coffee_bag} alt="" />
                        <h3>Price: $9.99</h3>
                        <AddToBag coffeeType="Rise Medium Roast"
                        handleAddToBag={props.handleAddToBag}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
