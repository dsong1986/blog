import React, { useState } from "react"
import { Link } from "react-router-dom"
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineHelpCenter } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

function User() {
    const user = true//false//true
    const [profileOpen, setProfileOpen] = useState(false)
    function close() {
        setProfileOpen(false)
    }
    function close(){
        setProfileOpen(false)
    }
    return (
        <>
            <div className="profile">
                {user ? (
                    <>
                        <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
                            <img src='https://www.illumination.com/wp-content/uploads/2019/11/DM_Agnes.png' width="200px" alt="images" />
                        </button>
                        {profileOpen && <div className="openProfile boxItems" onClick={close}>
                            <Link to='/account'>
                                <div className="image">
                                    <div className="img">
                                        <img src="https://www.illumination.com/wp-content/uploads/2019/11/DM_Agnes.png" width="200px" alt="images" />
                                    </div>
                                    <div className="text">
                                        <h4>Ethan Liu</h4>
                                        <p>San Francisco, CA</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/create">
                                <button className="box">
                                    <RiImageAddLine className="icon" />
                                    <h4>Create Post</h4>
                                </button>
                                <button className="box">
                                    <IoSettingsOutline className="icon" />
                                    <h4>My Account</h4>
                                </button>
                                <button className="box">
                                    <BsBagCheck className="icon" />
                                    <h4>My Order</h4>
                                </button>
                                <button className="box">
                                    <AiOutlineHeart className="icon" />
                                    <h4>Wishlist</h4>
                                </button>
                                <button className="box">
                                    <MdOutlineHelpCenter className="icon" />
                                    <h4>Help</h4>
                                </button>
                                <button className="box">
                                    <BiLogOut className="icon" />
                                    <h4>Logout</h4>
                                </button>
                            </Link>
                        </div>
                        }
                        
                    </>) : (
                    <Link to='/login'>
                        <button>My Account</button>
                    </Link>
                )}
            </div>
        </>
    )

}

export default User
