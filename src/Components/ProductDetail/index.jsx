import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
const ProductDetail = () => {
    const {isProductDetailOpen,closeProductDetail } =  useContext(ShoppingCartContext)
    return (
        <aside 
        className={`${isProductDetailOpen ? 'flex':'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={()=>{closeProductDetail()}}>
                    <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
                </div>

            </div>
        </aside>

    )
}

export default ProductDetail
