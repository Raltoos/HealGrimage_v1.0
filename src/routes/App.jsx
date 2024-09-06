import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import ScrollToTop from '../scroll/ScrollToTop'
import ChatBot from '../components/ChatBot'

function App() {

  return (
    <div className='w-full h-full scrollbar'>
      <div className='w-full h-full'>
        <ScrollToTop/>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
        <ChatBot />
      </div>
    </div>
  )
}

export default App
