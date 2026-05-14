import { Container, Paper } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CalculadoraSimple from './components/CalculadoraSimple'
import CalculadoraCompleta from './components/CalculadoraCompleta'
import CatalogPage from './pages/CatalogPage'
import CharacterDetailPage from './pages/CharacterDetailPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Paper elevation={8} sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simple" element={<CalculadoraSimple />} />
            <Route path="/completa" element={<CalculadoraCompleta />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/catalogo/:id" element={<CharacterDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Paper>
      </Container>
    </div>
  )
}

export default App
