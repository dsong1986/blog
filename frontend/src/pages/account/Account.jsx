import React from 'react'
// import './account.css'
import image from '../../assets/images/input.png'

export default function Account(){
    return (
        <>
        <section className='accountInfo'>
            <div className="container boxItems">
                <h1>Account Information</h1>
                <div className="content">
                    <div className="left">
                        <div className="img flexCenter">
                            <input type="file" src={image} alt='image' />
                            <img src={image} alt="image" />
                            

                        </div>
                    </div>
                    <div className="right">
                        <label htmlFor="">AAA</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" />
                        <button className='button'>Update</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}