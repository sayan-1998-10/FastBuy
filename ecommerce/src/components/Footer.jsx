import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram,AiFillFacebook,AiOutlineTwitter,AiFillCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <div className='back-to-top'>
        <Link  href="#">Back to Top</Link>
      </div>
      <div className='footer-container'>
        <div className='footer-main'>
          <div className='footer-store-logo'>
            {/* <img
            src='/assets/fastbuy-logo.png'
            width={150}
            height={180} /> */}
            <h1>FastBuy</h1>
          </div>
          
          { /* Vertical Separator */}
          <div className='vertical-bar'> </div>

          <div className='right'>
              <div>
                <span className='bold'>Get to Know Us</span>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Press Releases</li>
                  <li>Latest News</li>
                  <li>Privacy Notice</li>
                </ul>
              </div>
              <div>
                <span className='bold'>Let Us Help You</span>
                <ul>
                  <li>COVID 19</li>
                  <li>Your Account</li>
                  <li>Help</li>
                </ul>
              </div>
          </div>
        </div>  

        <div className='footer-copyright'>
          <span>FastBuy | Conditions of Use | &copy; 1996-2023</span>
          <div className='footer-social'>
            <AiOutlineInstagram />
            <AiFillFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
    
      </div>
      
    
    </div>
  )
}

export default Footer