import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css';
import Home from './pages/home.js'
import Apropos from './pages/about.js'
import  Appart from './pages/appart'

const router = createBrowserRouter([
  {
    path : "/", 
    element :  <Home />
  }, 
  {
    path: "about",
    element:   <Apropos />
  },
  {
    path: "appart/:id",
    element:   <Appart />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router = { router } />
    </div>
  );
}

export default App;
