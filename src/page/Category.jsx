import React from 'react'
import Card from './Card'
import { motion } from "framer-motion"

const Category = () => {

    const animation = {
        h3: {
            transition: {
                delay: 0.6,
                duration: 1
            },
            initial: {
                x: "100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }

        },
        h1: {
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
        <div className='main-class' >
            <div className="category">
                <div className="categories">
                    <div className='category-line'></div>
                    <motion.h3 {...animation.h3} >Categories</motion.h3>
                </div>
                <div className="explore">
                    <motion.h1 {...animation.h1}>Explore our Top Categories</motion.h1>
                </div>
            </div>
            <div className="card-components">
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Category