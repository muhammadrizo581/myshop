import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "../../../hooks/useFetch"
import img from "../../../assets/img.jpeg"

const UserDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, error, loading } = useFetch(`/users/${id}`)

  if (loading) {
    return <p className="text-center mt-10">Loading user...</p>
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Failed to load user</p>
  }
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-[14px] p-[25px] border-[1px] border-black max-w-lg mx-auto">
        <div className="flex items-center gap-[20px] mb-4">
          <img
            src={img}
            alt={data.name}
            className="w-[80px] h-[80px] rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
            <p className="text-gray-600">Username: {data.username}</p>
          </div>
        </div>
        <p className="mb-2"><span className="font-bold">Email:</span> {data.email}</p>
        <p className="mb-2"><span className="font-bold">Phone:</span> {data.phone}</p>
        <p className="mb-2"><span className="font-bold">Website:</span> {data.website}</p>
        <p className="mb-2"><span className="font-bold">City:</span> {data.address?.city}</p>
        <p className="mb-2"><span className="font-bold">Company: </span>{data.company.name}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-[16px] px-[16px] py-[8px] bg-black text-white rounded-[14px]"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default UserDetail
