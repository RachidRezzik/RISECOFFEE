import React from 'react'
//Images
import Rise_Bro1 from '../images/Rise_Brother1.jpg'
import Rise_Bro2 from '../images/Rise_Brother2.jpg'

export default function About() {
    return (
        <div>
            <div className="about_rise">
                <h1>About Rise Coffee</h1>
                <h3>Our Story</h3>
            </div>
            <div className="about_story">
                <h3>The Rise Brothers</h3>
                <div className="Rise_Brothers_Container">
                    <div className="brother">
                        <img src={Rise_Bro1} alt="" />
                        <h3>John Rise</h3>
                    </div>
                    <div className="brother">
                        <img src={Rise_Bro2} alt="" />
                        <h3>Brandon Rise</h3>
                    </div>
                </div>
                <p>Rise Coffee was founded by the Rise brothers in 2018. The brothers shared an entrepreneurial passion that was often fueled by coffee. With coffee being apart of their everyday pursuits, the brothers often discussed which coffees they thought were better and why. These discussions ended up being what each brother looked forward to each day. </p>
                <p>After many colorful discussions, the Rise brothers decided to put their money where their mouthes were by creating their own fresh organic coffee. With four locations across Texas and our online store, we invite you to taste the passion put into our coffee!</p>
            </div>
        </div>
    )
}
