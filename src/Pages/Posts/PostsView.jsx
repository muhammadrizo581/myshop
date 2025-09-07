import React from "react"
import { useNavigate } from "react-router-dom"

const Postsview = ({ data, error, loading }) => {
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
    <div className="grid grid-cols-2 gap-4">
      {data.map((post) => (
        <div
          key={post.id}
          onClick={() => navigate(`/posts/${post.id}`)}
          className="cursor-pointer bg-white rounded-[14px] p-[15px] border"
        >
          <h2 className="font-bold text-[20px] gray] mb-[10px]">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Postsview
