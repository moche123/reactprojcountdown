import { Route, Routes } from "react-router-dom"
import { Login } from "../Login"
import { Concert } from "../Concert"

const MainContent = () => {
  return (
    <div className='container'>

      <Routes>
          <Route path='/login' element={ <Login/> } ></Route>
          <Route path='/' element={ <Concert/> } ></Route>
      </Routes>
    </div>
  )
}

export { MainContent }
//export default MainContent 