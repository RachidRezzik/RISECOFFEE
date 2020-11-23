import React from 'react'
import {
    Link
} from 'react-router-dom'
//Images
import down_arrow from '../images/dropdown_arrow.png'
import fire from '../images/fire.jpg'

export default function Home() {
    const handleScrollArrow = () => {
        window.scroll({
            top: window.innerHeight - 65, 
            behavior: 'smooth'
        });
    }

    const handleHomeLinks = () => {
        window.scrollTo({
            top: 0
        })
    }

    return (
        <div>
            <div className="home_welcome">
                <h1>Rise to the Occassion</h1>
                <Link to="/Coffee" onClick={handleHomeLinks}>Shop Coffee</Link>
                <img src={down_arrow} onClick={handleScrollArrow} alt="" />
            </div>
            <div className="our_process">
                <h4>Fire Roasted Coffee Beans</h4>
                <h2>Our Process</h2>
                <img src={fire} alt="" />
                <p>At Rise Coffee, We Use Organic Coffee Beans From Across the Globe. All Beans Are Roasted Over an Open Flame in Our Special Roasters. Come Experience the Difference Today!</p>
                <Link to="/Locations" onClick={handleHomeLinks}>Locations</Link>
            </div>
        </div>
    )
}
