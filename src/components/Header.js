import React, {useState, useEffect} from 'react'
import {
    Link
} from 'react-router-dom'
//Images
import coffee_logo from '../images/coffee_logo.png'
import hamburger from '../images/hamburger.png'
import x_mark from '../images/x_mark.png'
import shopping_bag from '../images/shopping_bag.png'
//Component
import useCurrentWidth from '../components/useCurrentWidth'

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(useCurrentWidth() <= 750 ? true : false)
    const [navBlack, setNavBlack] = useState(false)

    useEffect(() => {
        if (window.location.href.includes("Checkout")){
            setNavBlack(true)
        }
    })

    const handleSetNavBlack = () =>{
        if (window.scrollY > 65){
        setNavBlack(true)
        } else if (window.scrollY <= 65 && !window.location.href.includes("Checkout")){
            setNavBlack(false)
        }

    }

    window.addEventListener("scroll", handleSetNavBlack)

    
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        if(props.cartOpen == true) {
            props.handleCartOpen()
            setNavBlack(true)
        }
        if (window.scrollY <= 65 && menuOpen === true){
            setNavBlack(false)
        } else if (window.scrollY <= 65 && menuOpen === false){
            setNavBlack(true)
        } 
    }

    const handleMenuOpen2 = () =>{
        setMenuOpen(false)
        window.scrollTo({
            top: 0
        })
        if(props.cartOpen == true) {
            props.handleCartOpen()
        }else if (window.scrollY <= 65){
            setNavBlack(false)
        }
    }

    const handleResize = (width, isMobile) =>{
        if (width > 750 && isMobile == true){
            setIsMobile(false)
            setMenuOpen(false)
        } else if (width <=750 && isMobile == false){
            setIsMobile(true)
            setMenuOpen(false)
        }
    }

    handleResize(useCurrentWidth(), isMobile)

    const handleCartOpen2 = () => {
        if (props.cartOpen == false && window.scrollY < 65){
            setNavBlack(true)
        } else if (props.cartOpen == true && window.scrollY < 65){
            setNavBlack(false)
        }
        props.handleCartOpen()
        setMenuOpen(false)
    }

    

    return (
        <div>
            <div className={navBlack ? "navbar active" : "navbar"}>
                <div className="hamburger">
                    <img src={menuOpen ? x_mark : hamburger} alt="" onClick={handleMenuOpen}/>
                </div>
                <div className="coffee_logo">
                    <Link to="/" onClick={handleMenuOpen2}>
                        <img src={coffee_logo} alt="" /> 
                    </Link>
                </div>
                <div className="shopping">
                    <img onClick={handleCartOpen2} src={shopping_bag} alt="" />
                    <h4 onClick={props.handleCartOpen}id="cart_amount">{props.cartItems}</h4>
                </div>
                <div className={menuOpen ? "menu_container_active" : "menu_container"}>
                    <ul className={menuOpen ? "site_navigation active" : "site_navigation"}>
                        <li>
                            <Link className="nav_link" to="/" onClick={handleMenuOpen2}>Home</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/About" onClick={handleMenuOpen2}>About</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/Coffee" onClick={handleMenuOpen2}>Coffee</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/Locations" onClick={handleMenuOpen2}>Locations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header