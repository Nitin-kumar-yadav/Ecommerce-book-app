import React, { useEffect, useState } from 'react'
import image from '../assets/discount.svg'
import { motion } from "framer-motion"

const Discount = () => {


    const animation = {
        h1: {
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
        p: {
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            initial: {
                y: "100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        },
        img: {
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
        }
    }

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2026";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='discount-container' >
            <div className="discount-main-conta">
                <div className="discount-text">
                    <motion.h1 {...animation.h1}>All books are 50% off now! Don't miss such a deal!</motion.h1>
                    <motion.p {...animation.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</motion.p>
                    <div className="discount-time">
                        <div className="time" id='days' >
                            <span><h1>{days}</h1></span>
                            <span><p>Days</p></span>
                        </div>
                        <div className="time" id='hours' >
                            <span><h1>{hours}</h1></span>
                            <span><p>Hours</p></span>
                        </div>
                        <div className="time" id='minutes' >
                            <span><h1>{minutes}</h1></span>
                            <span><p>Minutes</p></span>
                        </div>
                        <div className="time" id='seconds' >
                            <span><h1>{seconds}</h1></span>
                            <span><p>Seconds</p></span>
                        </div>
                    </div>
                </div>
                <div className="discount-image">
                    <motion.img {...animation.img} src={image} alt="book" />
                </div>
            </div>
        </div>
    )
}

export default Discount