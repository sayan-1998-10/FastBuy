import Link from 'next/link';
import React from 'react';
import MenuIcon from './MenuIcon';
import {AiOutlineShoppingCart} from 'react-icons/ai' 
import Search from './Search';


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='menu-logo-wrapper'>
        <MenuIcon/>
        <div className='store-icon-container'>
          <Link href="/">
            {/* <img src='/assets/fastbuy-logo.png'
              className="store-logo"
            /> */}
            <h2>FastBuy</h2>
          </Link>
          {/* <h1 className='store-slogan'>Lightning Fast Delivery</h1> */}
        </div>
      </div>
      <div className='search-form'>
        <Search />
      </div>

      
      
      <button className='cart-icon' type='button'>
        <AiOutlineShoppingCart />
        <span className='cart-item-qty'>1</span>
      </button>


    </div>
  )
}

export default Navbar