import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

export default function Footer(){
    return (
        <>
        <footer className="boxItems">
            <div className="container flex">
                <p>
                Ethan's Blog- All right reserved - Design & Developed by Danni
                </p>
                <div className="social">
                    <BsFacebook className='icon' />
                    <RiInstagramFill className='icon' />
                    <AiFillTwitterCircle className='icon' />
                    <AiFillLinkedin className='icon' />
                </div>
            </div>

        </footer>
        </>
    )
}