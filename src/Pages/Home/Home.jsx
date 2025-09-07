import React from "react"
import { useFetch } from "../../hooks/useFetch"
import UsersView from "../Users/Users"

const Home = () => {
  const { data, error, loading } = useFetch("/users")

  return (
    <div className="container mx-auto px-4 py-6">
      <UsersView data={data} error={error} loading={loading} />
    </div>
  )
}

export default Home