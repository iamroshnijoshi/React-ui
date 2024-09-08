import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
 <section className='c-Wrapper'>
<div className="paddings innerWidth flexCenter c-container">
  {/* left side  */}
  <div className="flexColStart c-left">
    <span className='orangeText'>Our Contacts</span>
    <span className='primaryText'>Easy to contact us</span>
    <span className='secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio.</span>
  </div>

  <div className="c-right">
    <div className="image-container">
      <img src="./contact.jpg" alt="" />
    </div>
  </div>
</div>
 </section>
  )
}

export default Contact
