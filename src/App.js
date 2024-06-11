import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext,  useEffect,  useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductDetails';
import ProductsUpload from './pages/ProductUpload';

const MyContext = createContext();


function App() { 

  const [isToggleSideber, setIsToggleSideber] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSideberAndHeader, setIsHideSideberAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode','light');
    }else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode','dark');
    }
  },[themeMode]);


  const values={
    isToggleSideber,
    setIsToggleSideber,
    isLogin,
    setIsLogin,
    isHideSideberAndHeader,
    setIsHideSideberAndHeader,
    themeMode,
    setThemeMode
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSideberAndHeader!==true &&
          <Header/>
        }

        <div className='main d-flex'>
          {
            isHideSideberAndHeader!==true &&
            <div className={`sidebarWrapper ${isToggleSideber===true ? 'toggle' : ''}`}>
              <Sidebar/>
            </div>
          }
          

          <div className={`content ${isHideSideberAndHeader===true  && 'full'} ${isToggleSideber===true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true}  element={<Dashboard/>}/>
              <Route path="/dashboard" exact={true}  element={<Dashboard/>}/>
              <Route path="/login" exact={true}  element={<Login/>}/>
              <Route path="/signUp" exact={true}  element={<SignUp/>}/>
              <Route path="/products" exact={true} element={<Products/>}/>
              <Route path="/product/details" exact={true} element={<ProductsDetails/>}/>
              <Route path="/product/upload" exact={true} element={<ProductsUpload/>}/>
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}