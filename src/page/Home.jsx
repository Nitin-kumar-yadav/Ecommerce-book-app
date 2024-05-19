
import { useEffect, useState } from 'react'
import Hero from './Hero'
import Category from './Category'
import NewBook from './NewBook'
import Discount from './Discount'

const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const bookData = async () => {
            const response = await fetch('http://localhost:5000/books')
            const data = await response.json()
            setBooks(data)
        }
        bookData()
    }, [])


    return (

        <div className='Home'>
            <Hero books={books} />
            <Category />
            <NewBook />
            <Discount />

        </div>
    )
}

export default Home