import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import LessonPage from './pages/LessonPage'
import CodePlayground from './pages/CodePlayground'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="flex-grow pt-20"> {/* Adjust padding-top for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/lessons/:id" element={<LessonPage />} />
            <Route path="/playground" element={<CodePlayground />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
