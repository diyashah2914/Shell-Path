import Home from './pages/Home'
import Command from './pages/Command'
import Graph from './pages/Graph'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/command/:name" element = {<Command />} />
      <Route path="/graph" element={<Graph/>}></Route>
    </Routes>
    </div>
  )
}

export default App