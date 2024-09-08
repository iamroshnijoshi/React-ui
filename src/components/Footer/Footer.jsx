 import React from 'react'
 import './Footer.css'
 
 const Footer = () => {
   return (
     <section className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120}/>
            <span className='secondaryText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Facilis error beatae iste dolores animi?</span>
        </div>

        <div className=" flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>123 New York, fl 4571,USA</span>
        </div>
     </section>
   )
 }
 
 export default Footer
 