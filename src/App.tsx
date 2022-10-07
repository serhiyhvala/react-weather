import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/components/Home'
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics'
import { Header } from './pages/shared/Header'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  )
}

export default App
