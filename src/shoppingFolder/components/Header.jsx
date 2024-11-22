import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title"><h2>Fashion World</h2></div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="search" placeholder='Search' />
        </div>
        <div className="right">
            <div className="signIn">
                sign In/ sign Up
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header