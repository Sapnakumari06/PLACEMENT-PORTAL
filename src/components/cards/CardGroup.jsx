import React from 'react'
import Cards from './Cards'
import "./Cards.css"
function CardGroup() {
  return (
    <>
     <div className="box">
            <Cards svg="" num="2500+" p = "Students Placed"/>
            <Cards svg="" num="150+" p = "Companies Visited"/>
            <Cards svg="" num="58LPA" p = "Highest Package"/>
            <Cards svg="" num="6LPA" p = "Average Package"/>
            <Cards svg="" num="104" p = "Package Above 10LPA"/>
            <Cards svg="" num="965" p = "Package 5-10LPA"/>
        </div> 
    </>
  )
}

export default CardGroup
