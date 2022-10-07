import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/components/Home'
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  )
}

export default App
