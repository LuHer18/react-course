import {createContext, useState } from "react";

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

     //productDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const OpenProductDetail = ()=> setIsProductDetailOpen(true);  
    const closeProductDetail = ()=> setIsProductDetailOpen(false);

    const [productToShow, setProductToShow] = useState({})

    //Shopping cart
    const [cartProducts, setCartProducts] = useState([])

    //checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const OpenCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true);  
    const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false);

    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount, 
            OpenProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isCheckoutSideMenuOpen,
            OpenCheckoutSideMenu,
            closeCheckoutSideMenu
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

export default ShoppingCartProvider