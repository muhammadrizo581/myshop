import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import PostsView from './PostsView'

const Posts = () => {
  const { data, error, loading } = useFetch("/posts")

  return (
    <div className="container mx-auto px-4 py-6">
      <PostsView data={data} error={error} loading={loading} />
    </div>
  )
}

export default Posts