import React from 'react'
import { motion } from "framer-motion"


const Card = () => {

    const animation = {
        img: {
            transition: {
                delay: 0.6,
                duration: 1
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
        h2: {
            transition: {
                delay: 0.6,
                duration: 1
            },
            initial: {
                y: "100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }

    return (

        <div className='card' >
            <motion.div {...animation.img} className="image">
                <img src="https://cdn.pixabay.com/photo/2015/11/19/21/11/book-1052014_1280.jpg" alt="" srcset="" />
            </motion.div>
            <div className="category-name">
                <motion.h2 {...animation.h2} >Science</motion.h2>

            </div>
        </div>
    )
}

export default Card