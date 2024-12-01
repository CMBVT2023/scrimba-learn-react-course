import { BrowserRouter, Route, Routes } from 'react-router'
import { StaticPages } from './StaticPagesProject/StaticPages'

import { NavBar } from './NavBar/NavBar'
import { Home } from './Home'

export function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/staticPages' element={<StaticPages />} />
      </Routes>
    </BrowserRouter>
  )
}