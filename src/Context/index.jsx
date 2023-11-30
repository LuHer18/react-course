import { Children, createContext } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = () => {
    
    return (
        <ShoppingCartContext.Provider>
            {Children}
        </ShoppingCartContext.Provider>
        
    )
}

export default ShoppingCartProvider