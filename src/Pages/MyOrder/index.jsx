import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import OrderCard from "../../Components/OrderCard" 
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
function MyOrder() {
  const {
    order
  } = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname 
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = order?.length - 1
  

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon  className='h-6 w-6 text-black hover:text-red-600 cursor-pointer'></ChevronLeftIcon>
        </Link>
        <h1>My Order</h1>
      </div>
      
      {<div className='flex flex-col'>
        {
          order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        }
      </div>}
    </Layout>
  )
}

export default MyOrder