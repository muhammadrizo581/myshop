import React from "react"
import { useNavigate } from "react-router-dom"
import img from "../../assets/img.jpeg"

const UsersView = ({ data, error, loading }) => {
  const navigate = useNavigate()

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Failed to load users</p>
  }

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">There's no users now.)</p>
  }

  return (
    <div className="grid grid-cols-3 gap-[20px]">
      {data.map((user) => (
        <div key={user.id} onClick={() => navigate(`/users/${user.id}`)} className="cursor-pointer rounded-[14px] p-[25px] border-[1px] border-black flex items-center gap-[15px] h-[135px]" >        
          <img src={img} alt="user avatar" className="w-[60px] h-[60px] rounded-full object-cover ]" />
          <div>
            <h3 className="font-bold text-[18px] text-gray-800">{user.name}</h3>
            <h2>Username: {user.username}</h2>
            <p className="text-[gray]">Email: {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersView
