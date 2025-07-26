import { Route, Routes } from 'react-router'

import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import AboutPage from './pages/About/AboutPage'
import BlogPage from './pages/blog/BlogPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/Home/HomePage'
import PagesPage from './pages/pages/PagesPage'
import ServicePage from './pages/service/ServicePage'

function App() {
 

  return (
    
     <Routes>
      <Route path='/' element= {<RootLayouts/>}>
       <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/pages' element={<PagesPage/>}/>
      </Route>
     </Routes>

      
    
  )
}

export default App
