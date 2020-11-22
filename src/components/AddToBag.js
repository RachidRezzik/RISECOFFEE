import React, { useState } from 'react'
//Images
import minus_sign from '../images/minus_sign.png'
import plus_sign from '../images/plus_sign.png'
import ItemAdded from './ItemAdded'

function AddToBag(props) {
    const [itemQuantity, setItemQuantity] = useState(0)
    const [show, setShow] = useState(0)
    const current_value = React.createRef()
    
    const handleAddQuantity = () => {
        let value = Number(current_value.current.value)
        value += 1
        setItemQuantity(value)
    }

    const handleSubtractQuantity = () => {
        let value = Number(current_value.current.value)
        if (value !== 0){
            value = value - 1
            setItemQuantity(value)
        }
    }

    const handleAddToBagClick = () =>{
        if (Number(current_value.current.value) !== 0){
            props.handleAddToBag(current_value.current.value, props.coffeeType)
            setShow(show + 1)
        }
    }

    return (
        <div>
            <ItemAdded show={show} delay={1000} 
            />
            <div className="add_to_bag_div">
                <img style={imgStyle} src={minus_sign} alt="" onClick={handleSubtractQuantity}/>
                <input type="text" ref={current_value} value={itemQuantity} readOnly/>
                <img style={imgStyle} src={plus_sign} alt="" onClick={handleAddQuantity}/>
                <button className="add_to_bag" onClick={handleAddToBagClick}>Add to Bag</button>
            </div>
        </div>
    )
}

const imgStyle={
    width: "20px",
    height: "20px"
}

export default AddToBag
