import React from 'react'
import './create.css'

export default function Create() {
    return (
        <>
            <section className='newPost'>
                <div className="container boxItems">
                    <div className="img">
                        <img src='https://www.illumination.com/wp-content/uploads/2019/11/DM_Agnes.png' width="200px" alt="images" />
                    </div>
                    <form action="">
                        <div className="inputFile flexCenter">
                            <input type="file" name="" id="" />
                        </div>
                        <input type="text" placeholder='Title' />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button className='button'>Create Post</button>
                    </form>
                </div>

            </section>
        </>
    )
}