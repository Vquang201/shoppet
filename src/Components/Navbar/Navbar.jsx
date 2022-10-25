import React, { useRef, useEffect, useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../ContextApi/Context';
import './navbar.css'


export default function Navbar() {
    const headerRef = useRef(null);
    const { pathname } = useLocation();
    const { countProduct } = useContext(Context)
    const headerNav = [
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Cats',
            path: '/cats'
        },
        {
            display: 'Dogs',
            path: '/dogs'
        },
        {
            display: 'Carts',
            path: '/carts'
        }
    ];
    const active = headerNav.findIndex(e => e.path === pathname);
    useEffect(() => {
        const header = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('bg-height');
            } else {
                headerRef.current.classList.remove('bg-height');
            }
        }
        window.addEventListener('scroll', header);
        return () => {
            window.removeEventListener('scroll', header);
        };
    }, []);
    return (
        <div>
            <div ref={headerRef} className='navbar'>
                {
                    headerNav.map((e, i) => (
                        <Link key={i} className={`navbar-item ${i === active ? 'active' : ''}`} to={e.path}>
                            {e.display}
                        </Link>
                    ))
                }
                <div className='navbar-count-product'>{countProduct}</div>
            </div>
        </div>

    )
}
