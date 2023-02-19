import React from 'react';
import './header.css'
import logo from '../../assets/images/logo.png'
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import User from './User'

function Header(){
    return (
        <>
            <header className='header'>
                <div className='scontainer flex'>
                    <div className='logo'>
                        <img src={logo} alt='logo' width='20px' />
                    </div>
                    <nav>
                        <ul>
                            {nav.map((item) => (
                               <li key={item.id}>
                                   <Link to={item.url}>{item.text}</Link>
                               </li>
                           ))}
                        </ul>

                    </nav>
                    <div className='account flexCenter'>
                        <User />
                    </div>
                </div>
            
            </header>
        </>

    )
}
export default Header