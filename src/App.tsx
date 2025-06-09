import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Form from './pages/home/components/form'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
