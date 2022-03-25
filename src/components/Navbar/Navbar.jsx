import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const NAV_ITEMS = [
        {
            title: "BRANDS A_Z",
            link: "/brands",
            id: 1
        },
        {
            title: "WATCHES",
            link: "/products",
            id: 2
        },
        {
            title: "STORES",
            link: "*",
            id: 3
        },
        {
            title:"NEWS",
            link: "*",
            id: 4
        },
        {
            title: "CONTACTS",
            link: "*",
            id: 5
        }
    ]
    const location = useLocation();
    return (
        <div className='navbar'>
            {NAV_ITEMS.map((item) => (<Link className={location.pathname=== item.link ? "navbar-item-active" : 'navbar-item'} key={item.id} to={item.link}>{item.title}</Link>))}
            <Link to='/admin' className={location.pathname=== '/admin' ? "navbar-item-active" : 'navbar-item'}>ADMIN</Link>
        </div>
    );
};

export default Navbar;