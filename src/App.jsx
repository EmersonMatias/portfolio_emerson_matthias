import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./components/GlobalStyle"
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe/AboutMe"
import Home from "./pages/Home/Home"

function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<AboutMe />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
