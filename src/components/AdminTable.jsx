
import React, { useEffect, useState } from 'react'
import { mainUrl } from '..';

const AdminTable = () => {
    const [orderInfo, setOrderInfo] = useState({})
    const [bookInfo, setBookInfo] = useState([])
    const [customerInfo, setCustomerInfo] = useState({})

    useEffect(() => {
        const id = localStorage.getItem('userId');
        console.log(typeof id)
        const OrderDetails = async () => {
            const response = await fetch(`${mainUrl}/books/orderConfirm/admin/${id}`)
            const data = await response.json()
            console.log(data)

            setOrderInfo(data)
            setCustomerInfo(data.customerInfo)
            for (let i = 0; i < data.OrderBook.length; i++) {
                bookInfo.push(data.OrderBook[i])
            }
        }
        OrderDetails()
    }, [bookInfo]);

    return (
        <div className='cart-item' >
            <h1>Order List</h1>
            <div className="cart-top-one" key={customerInfo._id}>

                <div className="cart-image">
                    <h2>{customerInfo.name}</h2>
                </div>
                <div className="cart-title">
                    <h2>{customerInfo.address}</h2>
                </div>
                <div className="cart-author">
                    <p>{customerInfo.mobile}</p>
                </div>
                <div className="cart-price">
                    <p>{customerInfo.email}</p>
                </div>
            </div>
            <div className="admin-table-container">
                <div className="table"  >

                    <table  >
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        {bookInfo.map((book, index) => (
                            <tbody key={index}>
                                <tr >
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>{book._id}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>

            </div>
        </div >
    )
}

export default AdminTable