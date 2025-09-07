import React from "react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/layout"
import Home from "./Home/Home"
import UserDetail from "./Users/UserDetail/UserDetail"
import Posts from "./Posts/Posts"
import PostDetail from "./Posts/PostsDetail"
import SignUp from "./SignUp/SignUp"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default AppRouter