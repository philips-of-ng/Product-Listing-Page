import React, { useContext, useState } from 'react'
import '../css/navbar.css'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  // const navigate = useNavigate()

  const [visible, setVisible] = useState(false)

  // const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <div className='navbar'>

      <div className='logo-div'>
        <img className='cursor-pointer' onClick={() => navigate('/')} src={assets.real_logo} alt="" />
      </div>

      <div className='nav-div'>
        <ul>
          <li>
            <a className='one-nav-link' to={'/'}>
              <p>HOME</p>
              <hr />
            </a>
          </li>

          <li>
            <a className='one-nav-link' to={'/collections'}>
              <p>COLLECTIONS</p>
              <hr />
            </a>
          </li>
          <li>
            <a className='one-nav-link' to={'/contact'}>
              <p>CONTACT</p>
              <hr />
            </a>
          </li>
          <li>
            <a className='one-nav-link' to={'/about-us'}>
              <p>ABOUT US</p>
              <hr />
            </a>
          </li>

        </ul>
      </div>

      <div className='side-div'>
        <img className='search-btn' onClick={() => setShowSearch(true)} src={assets.search_icon} alt="" />
        <img className='profile-btn' src={assets.profile_icon} alt="" />
        <div className='cart-div' onClick={() => navigate('/cart')}>
          <img src={assets.cart_icon} alt="" onClick={() => navigate('/cart')} />
          <p onClick={() => navigate('/cart')}>2</p>
        </div>
        <img onClick={() => setVisible(true)} className='menu-btn' src={assets.menu_icon} alt="" />
      </div>

      <div className={`${!visible ? 'sidebar' : 'sidebar-active'}`}>
        <div className='sidebar-head'>
          <img onClick={() => setVisible(false)} className='menu-btn' src={assets.cross_icon} alt="" />
          <p onClick={() => setVisible(false)}>Back</p>
        </div>

        <div className='sidebar-body'>
          <ul>
            <li>
              <a className='one-nav-link' to={'/'}>
                <p>HOME</p>
                <hr />
              </a>
            </li>

            <li>
              <a className='one-nav-link' to={'/collections'}>
                <p>COLLECTIONS</p>
                <hr />
              </a>
            </li>
            <li>
              <a className='one-nav-link' to={'/contact'}>
                <p>CONTACT</p>
                <hr />
              </a>
            </li>
            <li>
              <a className='one-nav-link' to={'/about-us'}>
                <p>ABOUT US</p>
                <hr />
              </a>
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar