
import BookCard from '../components/BookCard'
import { delay, motion } from "framer-motion"

const NewBook = () => {

    const animation = {
        new_book: {
            transition: {
                delay: 0.6
            },
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }


    return (
        <div className='new-book' >
            <div className="some-item">
                <h5>Some quality item</h5>
            </div>
            <motion.div {...animation.new_book} className="new-release">
                <span className='line-1'></span>
                <span><h1>New Release Books</h1></span>
                <span className='line-2'></span>
            </motion.div>
            <div className="book-card">
                <div className="BookCard">
                    <BookCard />
                </div>
            </div>
        </div>
    )
}

export default NewBook