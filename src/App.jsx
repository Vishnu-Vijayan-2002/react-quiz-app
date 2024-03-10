import { Route, Routes } from 'react-router-dom';
import './App.css'
import Loginpage from './Loginpage';
import MainPage from './MainPage';
import Result from './Result';
function App() {
  return (
    <>
     <Routes>
      <Route path='/main' element={<MainPage/>}></Route>
      <Route path='/' element={<Loginpage/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
     </Routes>
    </>
  )
}

export default App
