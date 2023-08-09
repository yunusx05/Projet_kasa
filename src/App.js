import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css';
import Home from './pages/home.js'
import Apropos from './pages/about.js'

const router = createBrowserRouter([
  {
    path : "/", 
    element :  <Home />
  }, 
  {
    path: "about",
    element:   <Apropos />
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
