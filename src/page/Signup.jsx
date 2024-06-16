import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { mainUrl } from '..';

const Signup = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [loading, setLoading] = useState(false)
    const [address, setAddress] = useState("")
    const [mobile, setMobile] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!name || !email || !password || !confirm || !address || !mobile) {
            toast.error("Please fill all the fields")
        }
        else if (password !== confirm) {
            toast.error("Passwords do not match")
        }
        else {
            const data = {
                name,
                email,
                password,
                address,
                mobile
            }
            setLoading(true);
            try {
                const response = await axios.post(`${mainUrl}/books/signup`, data)
                if (!response) {
                    toast.error("Something went wrong")
                }
                toast.success("User created successfully")
                navigate('/login');
                setLoading(false);
                setName("")
                setEmail("")
                setPassword("")
                setConfirm("")
                setAddress("")
                setMobile("")

            } catch (error) {
                toast.error("User already exists")
            }
        }

    }

    return (
        <div className="base-container">
            <div className="header">Sign Up</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Name..." />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setConfirm(e.target.value)} value={confirm} type="password" name="conf_password" placeholder="Confirm" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" name="conf_password" placeholder="Address" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setMobile(e.target.value)} value={mobile} type="number" name="conf_password" placeholder="Mobile" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button onClick={handleSubmit} type="button" className="btn">
                    {loading === true ? 'Loading...' : 'Sing Up'}
                </button>
            </div>
        </div>
    )
}

export default Signup