
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'


const Shop = () =>
{
  return (<div> <h1>I am from Shop</h1> </div>)
}



const App = () =>
{
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='Shop' element={<Shop />}></Route>
      </Route>

    </Routes>
  )
}


export default App;


