import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Characters from './pages/Characters'
import Storyworld from './pages/Storyworld'
import Premise from './pages/Premise'
import Dynamics from './pages/Dynamics'
import TradeOffs from './pages/TradeOffs'
import Duration from './pages/Duration'
import Gallery from './pages/Gallery'
import Contributions from './pages/Contributions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/storyworld" element={<Storyworld />} />
      <Route path="/premise" element={<Premise />} />
      <Route path="/dynamics" element={<Dynamics />} />
      <Route path="/tradeoffs" element={<TradeOffs />} />
      <Route path="/duration" element={<Duration />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contributions" element={<Contributions />} />
    </Routes>
  )
}

export default App
