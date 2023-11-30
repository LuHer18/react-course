import {createContext, useState } from "react";

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

     //productDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const OpenProductDetail = ()=> setIsProductDetailOpen(true);  
    const closeProductDetail = ()=> setIsProductDetailOpen(false);
    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount, 
            OpenProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

export default ShoppingCartProvider