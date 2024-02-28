import { useRoutes } from 'react-router-dom'
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
import Meeting from './pages/Meeting'

function App() {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'cards', element: <Cards /> },
    { path: 'characters', element: <Characters /> },
    { path: 'storyworld', element: <Storyworld /> },
    { path: 'premise', element: <Premise /> },
    { path: 'dynamics', element: <Dynamics /> },
    { path: 'tradeoffs', element: <TradeOffs /> },
    { path: 'duration', element: <Duration /> },
    { path: 'gallery', element: <Gallery /> },
    { path: 'contributions', element: <Contributions /> },
    { path: 'meeting', element: <Meeting /> },
  ]);

  return element;
}

export default App;