import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate,setAuthenticate] = useState(false); 
  // false = logout, true = login
  useEffect(()=>{
    //console.log("로그인");
  },[authenticate])  //의존성 배열에 값이 있을 때 그 값이 바뀔 때마다 함수가 다시 실행됨
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>} />

      </Routes>
    </>
  );
}

export default App;
