import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, error, loading } = useFetch(`/posts/${id}`)

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (error) return <p className="text-center mt-10 text-red-500">Failed to load post</p>
  if (!data) return <p className="text-center mt-10">No post found</p>

  return (
    <div className="max-w-[500px] mx-auto my-[50px] p-6 bg-white rounded-[14px] border ">
      <h1 className="text-[16px]font-bold mb-[20px]">{data.title}</h1>
      <p className="text-gray-700 mb-6">{data.body}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md"
      >
        Back
      </button>
    </div>
  )
}

export default PostDetail
