
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import './hero-car-syle/carousal.css';


const Hero = ({ books }) => {


    return (
        <div>
            <Carousel
                axis={'horizontal'}
                autoPlay={true}
                showThumbs={false}
                emulateTouch={false}
                stopOnHover={false}
                useKeyboardArrows={false}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                transitionTime={1500}

                // Other props...
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        className={`custom-arrow ${hasPrev ? 'active' : 'hidden'}`}
                        onClick={clickHandler}
                    >
                        <IoIosArrowRoundBack className="arrow-icon" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        className={`custom-arrow ${hasNext ? 'active' : 'hidden'}`}
                        onClick={clickHandler}
                    >
                        <IoIosArrowRoundForward className="arrow-icon" />
                    </div>
                )}
            >
                {
                    books.map((book, index) => (
                        <div id="HeroSection" className="hero" key={index}>
                            <div className="book-text">
                                <div className="book-title">
                                    <h1>{book.title}</h1>
                                </div>
                                <div className="para">
                                    <p>{book.description}</p>
                                </div>
                                <button>
                                    <Link to="/books">Show More</Link>
                                </button>
                            </div>
                            <div className="book-image">
                                <img src={book.image} alt="" srcset="" />
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Hero