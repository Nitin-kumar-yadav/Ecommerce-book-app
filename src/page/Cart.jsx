import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../app/cartSlice'
import { toast } from 'react-toastify'
import axios from 'axios'

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)
    console.log(products.price)
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

    const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0)

    const paymentHandler = async () => {
        try {

            const data = {
                amount: totalPrice,
                currency: 'INR',
                receipt: 'order_rcptid_11',
                payment_capture: 1
            }

            const response = await fetch('https://ecommerce-book-backend-api.onrender.com/books/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response) {
                toast.error("Some error occurred")
                return
            }

            const order = await response.json()

            if (!order) {
                toast.error("Order creation failed")
                return
            }

            const option = {
                key: 'rzp_test_1DP5mmOlF5G5ag',
                amount: totalPrice * 100,
                currency: 'INR',
                name: 'Book Store',
                description: 'Test Transaction',
                title: 'Payment',
                image: 'https://i.imgur.com/3g7nmJC.png',
                order_id: order.id,
                handler: async function (response) {
                    alert("Transaction Successful", response.razorpay_payment_id);
                },

                notes: {
                    address: 'Razorpay Corporate Office'
                },
                theme: {
                    color: '#F37254'
                }
            }

            if (!option) {
                toast.error("Some error occurred")
                return
            }

            const rzp = await new window.Razorpay(option)
            await rzp.open()
        } catch (error) {
            toast.error("Error opening")
            console.log(error)
        }

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
                            <p>Price: ₹{product.price}</p>
                        </div>
                        <div className="remove-button">
                            <button onClick={() => handleRemove(product._id)} >Remove</button>
                        </div>
                    </div>
                ))
            }
            <div div className="check-out" >
                <button onClick={paymentHandler} >Check Out</button>
                <div div className="total-price" >
                    <h2>Total Price: ₹{totalPrice}</h2>
                </div>
            </div>
        </div >
    )
}

export default Cart
