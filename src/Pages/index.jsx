import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import MainLayout from './layout/layout'
import Home from './Home/Home'


const AppRouter = () => {
  return (

    <React.Fragment>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='*' element={<div>404</div>}/>
            </Route>
            
            {/* <Route path='/login' element={<Login/>}/> */}
        </Routes>
    </React.Fragment>
  )
}

export default AppRouter