import { Link, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import User from "./components/User"
import About from "./components/About"
import UserDetails from "./components/UserDetails"

function App() {

  return (
    <>
      <nav className='w-full flex items-center justify-center gap-10 text-lg text-zinc-700 py-6 border-b-2 font-semibold uppercase'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<UserDetails/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
