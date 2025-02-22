import React, {createContext, useEffect, useState} from 'react'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import  Home  from './Page/Home'
export const Context = createContext() 

function App() {
  const[img, setImg] = useState(1)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/1');
        }
    }, [location.pathname, navigate]);
  return (
    <Context.Provider value={{img , setImg}}>
      <Routes>
        <Route path='/:id' element={<Home/>}/>
      </Routes>
    </Context.Provider>
  )
}

export default App