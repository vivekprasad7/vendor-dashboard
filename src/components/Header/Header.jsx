import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className='header'>
        <div className='page-name-section'>
                <h3>Payments</h3>
                <p>  <img src="https://dukaan-assignment-two.vercel.app/images/img_outlinedhelp.svg" alt="" srcset="" />  How it works</p>
              
        </div>
        <div className='search-section'>
            <i class="fa fa-search"></i>
            <input type="search" placeholder='Search Features, Tutorials etc.'/>
        </div>
        <div className='nav-section'>
            <div className='icon'>
              <img src="https://dukaan-assignment-two.vercel.app/images/img_user_gray_800.svg" alt="user" />
            </div>
            <div className='icon'>
              <img src="https://dukaan-assignment-two.vercel.app/images/img_favorite.svg" alt="dropdown" srcset="" />
            </div>

        </div>


    </div>
  )
}
