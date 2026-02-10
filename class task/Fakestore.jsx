import { useEffect, useState } from 'react'
import './App.css'

function Fakestore() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
      fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then((data)=>setProducts(data))
  })

  return (
    <>
      <div style={Style.card}>
          <img src={products.image} alt="" style={Style.img} />
          <h4>{products.title}</h4>
          <p><b>Price:</b>{products.price}</p>
          <p><b>Description:</b>{products.description}</p>
      </div>
    </>
  )
}
const Style={
  card:{
    width: "300px",
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    margin: "20px auto"
  },
  img:{
    height: "100px",
    objectFit: "contain"
    
  }
}

export default Fakestore
