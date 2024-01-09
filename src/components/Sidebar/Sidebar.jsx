import React from 'react'
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='v-logo-section'>
          <div className='v-details'>
            <div className='v-logo'>
              <img src="https://dukaan-assignment-two.vercel.app/images/img_image.png" alt="" />
            </div>
            <div className='v-links'>
                <h3>Nishyan</h3>
                <a href="https://www.google.com">Visit Store</a>
            </div>
          </div>
          <div className='dropdown'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_arrowdown.svg" alt="" />
          </div>
           
        </div>

        <div className='nav-links'>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon.svg" alt="" />
              <h3>Home</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_white_a700.svg" alt="" />
              <h3>Orders</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_white_a700_20x20.svg" alt="" />
              <h3>Products</h3>
          </div>

          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_20x20.svg" alt="" />
              <h3>Delivery</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_user.svg" alt="" />
              <h3>Marketing</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_settings.svg" alt="" />
              <h3>Analytics</h3>
          </div>

          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_2.svg" alt="" />
              <h3>Payments</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_3.svg" alt="" />
              <h3>Tools</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_4.svg" alt="" />
              <h3>Discounts</h3>
          </div>

          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_5.svg" alt="" />
              <h3>Audience</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_6.svg" alt="" />
              <h3>Appearance</h3>
          </div>
          <div className='nav-link'>
            <img src="https://dukaan-assignment-two.vercel.app/images/img_navbaricon_6.svg" alt="" />
              <h3>Plugins</h3>
          </div>

        </div>

        <div className='sidebar-end'>
              <div className='end-img'>
                <img src="https://dukaan-assignment-two.vercel.app/images/img_outlinewallet.svg" alt="" srcset="" />
              </div>
              <div className='end-txt'>
                <p>Available Credits</p>
                <h3>200</h3>
            </div>
           
        </div>

    </div>
  )
}
