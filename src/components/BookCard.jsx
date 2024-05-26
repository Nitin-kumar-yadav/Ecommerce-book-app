import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../app/cartSlice'
import { toast } from 'react-toastify'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

const BookCard = () => {

    const animation = {
        div: {
            transition: {
                duration: 0.5
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
        book_details: {
            transition: {
                duration: 0.5
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
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [books, setBooks] = useState([])


    const handleAdd = async (books) => {
        if (!localStorage.getItem("token")) {
            toast.error("Please login to add books")
            navigate('/login')
            return
        }
        toast.success("Book added")
        dispatch(add(books))
    }


    useEffect(() => {
        const response = async () => {
            const res = await fetch('https://ecommerce-book-backend-api.onrender.com/books');
            const data = await res.json();
            setBooks(data);
        }
        response();
    }, []);


    return (
        <>{
            books.map((bookData) => (
                <div className='book-card' key={bookData._id} >
                    <motion.div {...animation.div} className="books-in-card">
                        <div className="main-card">
                            <div className="image-container">
                                <img src={bookData.image} alt={bookData.title} />
                            </div>
                        </div>
                        <div className="button">

                            <button onClick={() => handleAdd(bookData)} >Add to Cart</button>
                        </div>
                    </motion.div>
                    <motion.div {...animation.book_details} className="book-details">
                        <h3>{bookData.title.length > 30 ? bookData.title.slice(0, 30) : bookData.title}</h3>
                        <p>{bookData.author}</p>
                        <h4>$ {bookData.price}</h4>
                    </motion.div>
                </div>
            ))
        }
        </>
    )
}

export default BookCard