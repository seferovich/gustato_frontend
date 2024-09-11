import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage/HomePage';
import MenuPage from './components/MenuPage/MenuPage';
import { useEffect, useState } from 'react';
import { menuService } from './services/menuService';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OrderPage from './components/OrderPage';


function App() {
  const [menu, setMenu] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setIsLoading(true) 
        const data = await menuService.getMenu() 

        
        setMenu(data)
      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setIsLoading(false) 
      }
    }
    
    fetchMenu()
  }, [])
  
  return (
    <div>
      <ScrollToTop />
      <div className="w-full h-full overflow-x-hidden  flex flex-col">
        <Navbar />
        
        <Routes>
        

          <Route path='/' element={<HomePage menu={menu} isLoading={isLoading} />}/>
          <Route path='/menu'element={<MenuPage menu={menu} isLoading={isLoading}/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' />
          <Route path='/order' element={<OrderPage />}/>
          
        </Routes>
        
        <Footer />
      </div>

    </div>
  );
}

export default App;
