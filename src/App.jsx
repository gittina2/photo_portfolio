import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Album from './pages/album'
import './App.css'
import ScrollToTop from './components/scrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<Album />} />
      </Routes>
    </Router>
  )
}

export default App
