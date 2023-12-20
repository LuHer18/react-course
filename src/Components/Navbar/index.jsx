import { NavLink } from "react-router-dom"
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


const Navbar = () => {
    const {cartProducts, setSearchCategory } =  useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3 ">
                <li className="font-semibold text-lg">
                    <NavLink to='/' 
                    onClick={()=> setSearchCategory()}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    onClick={()=> setSearchCategory()}
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mens-clothing'
                    onClick={()=> setSearchCategory("men's clothing")}
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        M-Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    onClick={()=> setSearchCategory("electronics")}
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelery'
                    onClick={()=> setSearchCategory("jewelery")}
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/womens-clothing'
                    onClick={()=> setSearchCategory("women's clothing")}
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        W-Clothing
                    </NavLink>
                </li>
                
            </ul>
            <ul className="flex items-center gap-3">
                <li
                className="text-black/60">
                    luher@fake.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({isActive})=> isActive ? activeStyle : undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li className="flex items-center">
                    
                    <ShoppingCartIcon  className="h-6 w-6"> </ShoppingCartIcon>
                   
                    <span>{cartProducts.length}</span>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar