import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import Album from './album'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ 
          padding: '20px', 
          borderBottom: '1px solid var(--border)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Martina Paganin</div>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'var(--text-h)', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
            <Link to="/album" style={{ color: 'var(--text-h)', textDecoration: 'none', fontWeight: '500' }}>Album</Link>
          </nav>
        </header>

        <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        </main>

        <footer style={{ 
          padding: '20px', 
          borderTop: '1px solid var(--border)', 
          textAlign: 'center', 
          fontSize: '14px', 
          color: 'var(--text)' 
        }}>
          &copy; {new Date().getFullYear()} Martina Paganin. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
