import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../app/cartSlice'
import { toast } from 'react-toastify'

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)
    const handleRemove = (productId) => {
        dispatch(remove(productId))
        toast.warn("Removed product")
    }
    if (products.length === 0) {
        return (
            <div className="cart-message">
                <h2>Your cart is Empty</h2>
            </div>
        )
    }

    return (
        <div className='cart-item' >
            <h1>Cart</h1>
            {
                products.map(product => (

                    <div className="cart-top-one">
                        <div className="cart-image">
                            <img src={product.image} alt="book" />
                            {console.log(product._id)}
                        </div>
                        <div className="cart-title">
                            <h2>{product.title.length > 20 ? product.title.slice(0, 20) : product.title}</h2>
                        </div>
                        <div className="cart-author">
                            <p>{product.author}</p>
                        </div>
                        <div className="cart-price">
                            <p>Price: ${product.price}</p>
                        </div>
                        <div className="remove-button">
                            <button onClick={() => handleRemove(product._id)} >Remove</button>
                        </div>
                    </div>
                ))
            }
            <div div className="check-out" >
                <button>Check Out</button>
            </div>
        </div >
    )
}

export default Cart