
import { useEffect, useState } from 'react'
import Hero from './Hero'
import Category from './Category'
import NewBook from './NewBook'
import Discount from './Discount'

const Home = () => {

    const [books, setBooks] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const bookData = async () => {
            const response = await fetch('https://ecommerce-book-backend-api.onrender.com/books')
            const data = await response.json()
            setBooks(data)
            setLoading(false);
        }
        bookData()
    }, [])

    if (loading) {
        return <div className="custom-spinner"></div>;
    }
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