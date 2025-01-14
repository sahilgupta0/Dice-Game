import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './component/Home'
import Game from './component/Game'

function App() {

  return (
	<BrowserRouter>
		<Routes>
			<Route path='/' Component={Home}></Route>
			<Route path='/dice-game' Component={Game}></Route>
		</Routes>
	</BrowserRouter>
    
  )
}

export default App
