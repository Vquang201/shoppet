import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className='flex-footer' >
            <h5 className='footer-title'>
                Copyright ©2022 All rights reserved | This template is made with  by Văn Quang <i className="fa fa-heart" aria-hidden="true"></i>
            </h5>
            <div>Connect with us</div>
            <div>
                <i className="footer-icon fa fa-facebook-official" aria-hidden="true"></i>
                <i className="footer-icon fa fa-twitter" aria-hidden="true"></i>
                <i className="footer-icon fa fa-instagram" aria-hidden="true"></i>
                <i className="footer-icon fa fa-telegram" aria-hidden="true"></i>
                <i className="footer-icon fa fa-google" aria-hidden="true"></i>
            </div>
            <div><i className="footer-phone fa fa-phone" aria-hidden="true">+84 889737517</i></div>
        </div>
    )
}
