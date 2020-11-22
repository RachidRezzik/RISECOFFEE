import React from 'react'
import {
    Link
} from 'react-router-dom'
//Images
import down_arrow from '../images/dropdown_arrow.png'
import coffee_video from '../images/coffee_video.mp4'
import fire from '../images/fire.jpg'

export default function Home(props) {
    const handleScrollArrow = () => {
        window.scroll({
            top: window.innerHeight - 50, 
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
            <div className="video_wrapper">
                <video id="coffee_video" autoPlay muted loop>
                    <source src={coffee_video} type="video/mp4" />
                </video>
                <div className="home_welcome">
                    <h1>Rise to the Occassion</h1>
                    <Link to="/Coffee" onClick={handleHomeLinks}>Shop Rise Coffee</Link>
                    <img src={down_arrow} onClick={handleScrollArrow} alt="" />
                </div>
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
