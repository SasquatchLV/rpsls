import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Game } from "./pages/Game"
import { Navbar } from "./components/Navbar"
import { GameEngineProvider } from "./context/GameEngineContext"

function App() {
  return (
    <>
      <GameEngineProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="game" element={<Game />} />
          </Routes>
        </Container>
      </GameEngineProvider>
    </>
  )
}

export default App
