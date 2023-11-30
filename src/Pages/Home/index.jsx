import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

const URL_API = 'https://fakestoreapi.com';

function Home() {
  const [items, setItems] = useState(null)

  useEffect(()=> {
    fetch(`${URL_API}/products`)
      .then(response => response.json())
      .then(data => {setItems(data)})
  }, [])

  return (
    <Layout>
      Home
      <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
      {
        items?.map((item)=> {
          return <Card key = {item.id} data = {item} />
        })
      }
      </div>
      <ProductDetail/>      
    </Layout>
  )
}

export default Home
