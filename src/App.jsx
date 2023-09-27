import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <Header />
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
