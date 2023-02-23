import React, { useState } from "react"
import { blogs} from "../../assets/data/data"
import './details.css'
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {BsPencilSquare} from 'react-icons/bs'
import {AiOutlineTags, AiOutlineDelete} from 'react-icons/ai'


export default function Details(params){
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        let blog = blogs.find(blog => blog.id === parseInt(id))
        if (blog) {
          setBlog(blog)
        }
      }, [])
  
  
    return (
        <>
        {blog?(
        <section className="singlePage">
            <div className="container">
                <div className="left">
                  
                    <img src={blog.cover} alt="" />
                </div>          
                <div className='right'>
                    <div className='buttons'>
                        <button className='button'>
                            <BsPencilSquare />
                         </button>
                        <button className='button'>
                            <AiOutlineDelete />
                        </button>
                    </div>
                    <h1>{blog.title}</h1>
                    <p>{blog.desc}</p>
                </div>
            </div>
        </section>):null}
        </>
    )

}
