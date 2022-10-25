import React, { useEffect, useState } from 'react'
import './gototop.css'
export default function GoToTop() {
    const [goToTop, setGoToTop] = useState(false)

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setGoToTop(true)
            } else {
                setGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })
    return (
        <div>
            <button onClick={handleGoToTop} className={`${goToTop ? 'goto' : 'goto-hiden'}`}>
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </button>
        </div>
    )
}
