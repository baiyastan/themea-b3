import React from 'react'
import Card from '../Card/Card'
import "./List.css"

function ProductList({list}) {
    console.log(list);
    
  return (
    <div className='container'>
        {
            list.map((item) => (
                <Card key={item.id} data={item}/>
            ))
        }
    </div>
  )
}

export default ProductList
