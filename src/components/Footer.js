import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0
        })
    }


    return (
        <div>
            <div className="footer_div">
                <h3>Subscribe to Our Newsletter for Exclusive Offers!</h3>
                <p>Users Can Unsubscribe at Anytime</p>
                <div className="subscribe_div">
                    <input id="enter_email" type="text" placeholder="Enter Your Email" />
                    <input type="button" id="submit_button" value="Submit" />
                </div>
                <div className="footer_nav">
                    <Link to="/" onClick={handleScrollTop}>Home</Link>
                    <Link to="/About" onClick={handleScrollTop}>About</Link>
                    <Link to="/Coffee" onClick={handleScrollTop}>Coffee</Link>
                    <Link to="/Locations" onClick={handleScrollTop}>Locations</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
