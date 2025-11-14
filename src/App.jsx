import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './componentes/layout/Header';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports'
import NewTransaction from './pages/NewTransaction';
import Login from './pages/Login'; // Importar el nuevo componente Login
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  return (
    <>
      <Router>
        {/* Mostrar Header solo si está autenticado */}
        {isAuthenticated && <Header />}
        
        <Routes>
          {/* Ruta de login - sin Header */}
          <Route 
            path="/login" 
            element={<Login onLogin={() => setIsAuthenticated(true)} />} 
          />
          
          {/* Rutas protegidas - con Header */}
          <Route 
            path="/" 
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/reports" 
            element={
              isAuthenticated ? <Reports /> : <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/new-transaction" 
            element={
              isAuthenticated ? <NewTransaction /> : <Navigate to="/login" replace />
            } 
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
