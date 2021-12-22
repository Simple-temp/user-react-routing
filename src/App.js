import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
// import Info from './component/Info/Info';
import User from './component/User/User';
import UserInfo from './component/UserInfo/UserInfo';
import NotFound from './component/NotFound/NotFound';
import GetDetails from './component/GetDetails/GetDetails';

function App() {

  // const [Isit, setIsit] = useState(false)

  return (
    <div className="container">
      {/* <h2>Isit : {Isit.toString()}</h2>
      <button onClick={()=>setIsit(!Isit)}>Toggle</button>
      <Info isit={Isit}></Info> */}
      <Router>
        <Routes>
            <Route path="/" element={<User/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/getdetails/:id" element={<GetDetails/>} />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
