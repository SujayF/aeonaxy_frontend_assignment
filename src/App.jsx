
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import About from './pages/About';
import Terms from './pages/Terms';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Home from './pages/Home';
import Datainsights from './pages/Datainsights';
import { Sharepage } from './pages/Sharepage';
import Tailoredfeeds from './pages/Tailoredfeeds';
import Delivery from './pages/Delivery';
import Comments from './pages/Comments';
import Customize from './pages/Customize';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
     <Router>
      <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route  path='/signin' element={ <Signin/>} />
         <Route path='/about' element = {<About/>} />
         <Route path='/terms' element = {<Terms/>} />
         <Route path='/help' element = {<Help/>} />
         <Route path='/privacy' element = {<Privacy/>} />
         <Route path='/datainsights' element = {<Datainsights/>} />
         <Route path='/sharepage' element = {< Sharepage />} />
         <Route path='/tailoredfeeds' element = {< Tailoredfeeds />} />
         <Route path='/delivery' element = {< Delivery />} />
         <Route path='/comments' element = {< Comments />} />
         <Route path='/customization' element = {<Customize/>} />
        </Routes>
     </Router>
    </>
  )
}

export default App
