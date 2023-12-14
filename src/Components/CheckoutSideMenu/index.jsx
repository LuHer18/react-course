import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../OrderCard'
import {totalPrice} from '../../utils'
import './style.css'
const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder} =  useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.2023',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts).toFixed(2)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
    }
   
    return (
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={()=>{closeCheckoutSideMenu()}}>
                    <XMarkIcon className='h-6 w-6 text-black hover:text-red-600 cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                cartProducts.map((product)=> (
                    <OrderCard 
                        key = {product.id}
                        id = {product.id}
                        title = {product.title}
                        image = {product.image}
                        price = {product.price}
                        handleDelete = {handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'> ${totalPrice(cartProducts).toFixed(2)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='bg-black py-3 rounded-lg text-white w-full' onClick={()=> handleCheckout()}>Checkout</button>
                </Link>

            	
            </div>
        </aside>

    )
}

export default CheckoutSideMenu
