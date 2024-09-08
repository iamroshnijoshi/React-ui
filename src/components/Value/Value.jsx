import React from 'react'
import './Value.css'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side  */}
            <div className="v-left">
                <div className="image-container">
                <img src="./value.png" alt="Value" />
                </div>
            </div>
            {/* right side  */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to you</span>
                <span className='secondaryText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illo.</span>
            </div>
        </div>
    </section>
  )
}

export default Value
