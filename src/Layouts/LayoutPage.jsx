import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Partials/Header'

const LayoutPage = () => {
  return (
    <>
        <Header/>
        <div className='container'>
          <Outlet/>
        </div>
    </>
  )
}

export default LayoutPage