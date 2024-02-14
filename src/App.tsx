import { Route, Routes } from 'react-router-dom'
import Home from './content/Home'
import Cards from './content/Cards'
import Characters from './content/Characters'
import Storyworld from './content/Storyworld'
import Premise from './content/Premise'
import Dynamics from './content/Dynamics'
import TradeOffs from './content/TradeOffs'
import Duration from './content/Duration'
import Gallery from './content/Gallery'

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
    </Routes>
  )
}

export default App
