import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        setLoading(true);
        try {
            const response = await axios.post('https://ecommerce-book-backend-api.onrender.com/books/login', data)
            console.log(response)
            if (!response) {
                toast.error("Something went wrong")
            }
            setLoading(false);
            toast.success("User logged in successfully")
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userId", response.data.user.id)

            navigate('/')
        } catch (error) {
            toast.error("Email or password incorrect")
            setLoading(false);
        }
    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button onClick={handleLogin} type="button" className="btn">
                    {loading === true ? "Loading..." : " Login"}
                </button>
            </div>
        </div>
    )
}

export default Login