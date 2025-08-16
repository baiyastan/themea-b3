import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProducrList/ProductList'
import apiClient from '../axios/apiClient'

function Home() {
  const [product, setProduct] = useState([])


  async function getMeal() {
    try {
      const res = await apiClient.get(`/search.php?s=a`)
      console.log(res);
      setProduct(res.data.meals)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMeal()
  }, [])

  return (
    <div>
      Banner
      <ProductList list={product} />
    </div>
  )
}

export default Home
