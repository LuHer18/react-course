import {createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

const URL_API = 'https://fakestoreapi.com';

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

    // Shopping Cart  Order
    const [order, setOrder] = useState([])

    // Get products

    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

     // Get products by category
     const [searchCategory, setSearchCategory] = useState(null)

    useEffect(()=> {
        fetch(`${URL_API}/products`)
          .then(response => response.json())
          .then(data => {setItems(data)})
    }, [])
    
    const filteredItemsByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items,searchCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()))
    }

    const filterBy= (searchType, items, searchByTitle, searchCategory) => {
      if(searchType == 'BY_TITLE'){
        return filteredItemsByTitle(items, searchByTitle)
      } 
      if(searchType == 'BY_CATEGORY'){
        return filteredItemsByCategory(items, searchCategory)
      }
      if(searchType == 'BY_TITLE_AND_CATEGORY'){
        return filteredItemsByCategory(items, searchCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
      } 
      if(!searchType) {
        return items
      }
    }

    useEffect(()=> { 
        if(searchByTitle && searchCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchCategory))
        if(searchByTitle && !searchCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchCategory))
        if(!searchByTitle && searchCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchCategory))
        if(!searchByTitle && !searchCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchCategory))

    }, [items,searchByTitle, searchCategory])
    


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
            closeCheckoutSideMenu,
            order, 
            setOrder,
            items,
            setItems,
            searchByTitle, 
            setSearchByTitle,
            filteredItems,
            searchCategory, 
            setSearchCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}

export default ShoppingCartProvider