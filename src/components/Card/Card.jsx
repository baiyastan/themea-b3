import React from 'react'
import "./Card.css"

function Card({data}) {
  return (
    <div className='card'>
      <img src={data.strMealThumb} alt="" />
      <p>{data.strMeal}</p>
    </div>
  )
}

export default Card
