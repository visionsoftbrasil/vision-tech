import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
            <Route exact path='/' element={<Home />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
