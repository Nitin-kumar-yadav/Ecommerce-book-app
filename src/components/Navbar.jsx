import React, { useState } from 'react'
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {

    const showSlider = () => {
        const isOpen = document.querySelector(".mobileMenu")
        isOpen.style.display = "inline-block"
    }
    const sliderClose = () => {
        const isOpen = document.querySelector(".mobileMenu")
        isOpen.style.display = "none"
    }

    const navigate = useNavigate();
    const itemCount = useSelector(state => state.cart)

    const logoutHandle = () => {
        localStorage.removeItem('token')
        navigate("/")
        toast.warning("You have been logged out")
    }

    return (

        <div className='navbar' id='navbar-style' >
            <div className="top-navbar">
                <div className="contact">
                    <span><FaPhoneAlt /></span>
                    <span>+91 9838984540</span>
                </div>
                <div className="social-icon">
                    <a href="https://www.facebook.com"><FaFacebookF /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                </div>
            </div>
            <div className="mid-navbar">
                <div className="user-icons">
                    <IoBookSharp />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={"/"} >Home</Link>
                        </li>
                        <li>
                            <Link to={"/books"} >Books</Link>
                        </li>


                        {
                            (!localStorage.getItem('token')) ?
                                <><li>
                                    <Link to={"/login"} >Login</Link>
                                </li>
                                    <li>
                                        <Link to={"/signup"} >Sign up</Link>
                                    </li> </>
                                :
                                <>
                                    <li>
                                        <Link to={"/profile"} >Profile</Link>
                                    </li>
                                    <li>
                                        <button onClick={logoutHandle} >
                                            Logout
                                        </button>
                                    </li>

                                </>
                        }
                    </ul>
                    <div className="shopping-icons">
                        <span className='cart'>
                            <Link to={"/cart"}><IoCartOutline /></Link>
                            <span className='cart-count'>{itemCount.length === 0 ? <div>{""}</div> : itemCount.length}</span>
                        </span>
                    </div>
                </div>
                <div className="mobileMenu">
                    <ul>
                        <li>
                            <RxCross1 onClick={sliderClose} />
                        </li>
                        <li>
                            <Link to={"/"} >Home</Link>
                        </li>
                        <li>
                            <Link to={"/books"} >Books</Link>
                        </li>


                        {
                            (!localStorage.getItem('token')) ?
                                <><li>
                                    <Link to={"/login"} >Login</Link>
                                </li>
                                    <li>
                                        <Link to={"/signup"} >Sign up</Link>
                                    </li> </>
                                :
                                <>
                                    <li>
                                        <Link to={"/profile"} >Profile</Link>
                                    </li>
                                    <li>
                                        <button onClick={logoutHandle} >
                                            Logout
                                        </button>
                                    </li>
                                </>
                        }
                    </ul>
                    <div className="shopping-icons">
                        <span className='cart'>
                            <Link to={"/cart"}><IoCartOutline /></Link>
                            <span className='cart-count'>{itemCount.length === 0 ? <div>{""}</div> : itemCount.length}</span>
                        </span>
                    </div>
                </div>
                <div className="hamburger">
                    <AiOutlineMenu onClick={showSlider} />
                </div>
            </div>

        </div>
    )
}

export default Navbar