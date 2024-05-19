import React from 'react'
import logo from '../assets/logo.svg'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Footer = () => {

    const animation = {
        left: {
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        mid: {
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        },
        right: {
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            initial: {
                x: "50%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        h3: {
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            initial: {
                y: "50%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }

    return (
        <div className='footer-container' id='footer-box' >
            <div className="footer-top">
                <motion.div {...animation.left} className="footer-left">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="social-svg-icons">
                        <span><a href="#"><FaFacebookF /></a></span>
                        <span><a href="#"><FaInstagram /></a></span>
                        <span><a href="#"><FaLinkedinIn /></a></span>
                        <span></span>
                    </div>
                </motion.div>
                <motion.div {...animation.mid} className="footer-mid">
                    <h2>Company</h2>
                    <ul>
                        <li><Link to={"/"} >Home</Link></li>
                        <li><Link to={"/books"} >Books</Link></li>
                        <li><Link to={"/login"} >Login</Link></li>
                        <li><Link to={"/signup"} >Sign up</Link></li>
                    </ul>
                </motion.div>
                <motion.div {...animation.right} className="footer-right">
                    <h2>Importent Links</h2>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </motion.div>
            </div>
            <div className="footer-bottom">
                <span></span>
                <motion.h3 {...animation.h3} >© 2024 Nitin. All Rights Reserved</motion.h3>
            </div>
        </div>
    )
}

export default Footer