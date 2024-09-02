import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Search from '../Search'
import Cards from '../Cards'

const Layout = () => {
  return (
    <div>
        <Header />
        <Search />
        <main>
            <Outlet />
        </main>
        <Cards/>
    </div>
  )
}

export default Layout