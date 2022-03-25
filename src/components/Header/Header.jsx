import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingOutlined} from '@ant-design/icons'
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='header'>
            <div>

            </div>
                <Link to='/'>
                    <img width="200px" src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg" alt="" />
                </Link>

                <Link to='/cart'>
                    <ShoppingOutlined style={{
                        fontSize: "30px",
                        color: "black"
                    }}/>
                </Link>
            </div>
            <Navbar/>
        </>
    );
};

export default Header;