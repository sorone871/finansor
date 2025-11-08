import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/layout/Header';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports'
import NewTransaction from './pages/NewTransaction';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div className="min-h-screen bg-[#E0E5EC]">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/new-transaction" element={<NewTransaction />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
