import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
