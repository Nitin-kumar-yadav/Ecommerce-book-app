import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Books from './page/Books'
import Login from './page/Login'
import Signup from './page/Signup'
import Cart from './page/Cart'
import ErrorPage from './page/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './page/Profile'
import { AdminRoute, ProtectedRoute } from './utils/ProtectedRoute'
import Admin from './components/Order'

const App = ({ userIsAuthenticated }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route element={<AdminRoute />}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App