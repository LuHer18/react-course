import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"



function Home() {
  const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map((item) => {
          return <Card key={item.id} data={item} />
        })
      )
    } else {
      return (
        <div className="flex items-center w-full h-full justify-center font-medium text-xl">
          No hay coincidencias
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
