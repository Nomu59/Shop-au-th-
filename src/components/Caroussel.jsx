import React from 'react'
import "../assets/css/caroussel.css"

const Caroussel = () => {
  return (
    <div>
      <div className="caroussel">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" defaultChecked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
        <div className="item text-white text-center "><a href="#">Lorem ipsum dolor sit.</a></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </main>
      </div>
    </div>
  )
}

export default Caroussel