import React from 'react';
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'

function Jumbotron() {
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img src={Iphone} alt="Iphone 14 Pro" className="logo" />
            <p className="text">Big and bigger.</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className='links'>
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <a href="#" className='link'>Learn more</a>
                </li>
            </ul>
            <img src={HoldingIphone} alt="iphone" className="iphone-img" />
        </div>
    );
}

export default Jumbotron;