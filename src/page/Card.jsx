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
        <div className='card'>
            <div className='card1' >
                <motion.div {...animation.img} className="image">
                    <img src="https://www.mentorbooks.ie/wp-content/uploads/2021/02/NOS-2-WRKBK-COVER-8-scaled.jpg" alt="Science" srcset="" />
                </motion.div>
                <div className="category-name">
                    <motion.h2 {...animation.h2} >Science</motion.h2>

                </div>
            </div>
            <div className='card1' >
                <motion.div {...animation.img} className="image">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91mq3UEpjGL.jpg" alt="History" srcset="" />
                </motion.div>
                <div className="category-name">
                    <motion.h2 {...animation.h2} >History</motion.h2>

                </div>
            </div>
            <div className='card1' >
                <motion.div {...animation.img} className="image">
                    <img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481409209/story-thieves-9781481409209_xlg.jpg" alt="Story" srcset="" />
                </motion.div>
                <div className="category-name">
                    <motion.h2 {...animation.h2} >Story</motion.h2>
                </div>
            </div>
        </div>
    )
}

export default Card