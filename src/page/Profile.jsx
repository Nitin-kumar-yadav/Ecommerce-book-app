import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { mainUrl } from ".."

const Profile = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('userId')

        const UserProfile = async (id) => {
            try {
                const res = await axios(`${mainUrl}/books/user/${id}`)
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                toast.error("Couldn't get user")
            }

        }
        UserProfile(id)
    }, [])

    return (
        <div className='profile-container' >
            <div className="left-profile">
                <h3>Name: <span>{data.name}</span> </h3>
                <p>Mobile no: <span>{data.mobile}</span></p>
                <p>Address line 1: <span>{data.address}</span></p>
            </div>
        </div>
    )
}

export default Profile