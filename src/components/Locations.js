import React from 'react'
//Images
import texas from '../images/texas.png'
import dallas from '../images/dallas.jpg'
import austin from '../images/austin.jpg'
import houston from '../images/houston.jpg'

export default function Locations(props) {
    return (
        <div>
            <div className="locations_rise">
                <h1>Rise Coffee Locations</h1>
                <img src={texas} alt="" />
            </div>
            <div className="locations">
                <h1>Texas Locations</h1>
                <div className="locations_container">
                    <div className="location">
                        <h3>Dallas</h3>
                        <img src={dallas} alt="" />
                        <h4>Address: 12672 Dallas St.</h4>
                        <h4>Phone: 214-123-0009</h4>
                    </div>
                    <div className="location">
                        <h3>Houston</h3>
                        <img src={houston} alt="" />
                        <h4>Address: 12772 Houston Avenue</h4>
                        <h4>Phone: 832-567-3319</h4>
                    </div>
                    <div className="location">
                        <h3>Austin</h3>
                        <img src={austin} alt="" />
                        <h4>Address: 19674 Austin Boulevard</h4>
                        <h4>Phone: 512-723-8209</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
