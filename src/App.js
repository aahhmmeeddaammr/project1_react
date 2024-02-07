import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import Protofolio from './Proto/Protofolio';
import Notfound from './Notfound/Notfound';
function App() {
  let router=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'proto',element: <Protofolio/>},
      {path:'*',element:<Notfound/>}
    ]},
  ])
  return <>
   <RouterProvider router={router}/>
  </>
}

export default App;
