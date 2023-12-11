import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import {PlusIcon} from "@heroicons/react/24/solid"
const Card = ({data}) => {
    const {count, setCount, OpenProductDetail, setProductToShow, cartProducts, 
        setCartProducts,OpenCheckoutSideMenu,isProductDetailOpen,closeProductDetail,isCheckoutSideMenuOpen,closeCheckoutSideMenu } =  useContext(ShoppingCartContext)
    const showProduct = (productDetail) => {
        if(isCheckoutSideMenuOpen){
            closeCheckoutSideMenu()
        }
        OpenProductDetail()
        setProductToShow(productDetail)

    }

    const addProductsToCart = (e, productData) => {
        e.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        if (isProductDetailOpen){closeProductDetail()}
        OpenCheckoutSideMenu()      
    }

    return(
        <div onClick={()=>showProduct(data)} className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.description} />
                <div onClick ={(e)=> {
                    addProductsToCart(e, data)
                    }} className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <PlusIcon  className="h-6 w-6"></PlusIcon>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light truncate mr-2">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export default Card