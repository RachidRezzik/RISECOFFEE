import React, {useState, useEffect} from 'react'

function ItemAdded(props) {

    const [isVisible, setIsVisible] = useState(false);
    
    
    useEffect(() =>
    {
        if (props.show !== 0){
            setIsVisible(true)
            setTimer(props.delay);
        }
    }, [props.show, props.delay]);
    
    const setTimer = (delay) =>
    {
        setTimeout(() => setIsVisible(false), delay);
    };

    return (
        <div><h3 className={isVisible ? "item_added_alert active" : "item_added_alert"}>Item Added to Bag</h3></div>
    );
};


export default ItemAdded
