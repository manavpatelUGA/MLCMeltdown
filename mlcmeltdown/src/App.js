import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TicketForm from './components/TicketForm';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import { useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import axios from 'axios';
import EditView from './components/EditView';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:12739/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if(tokenResponse.data) {
        const userRes = await axios.get("http://localhost:12739/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route path = '/Home-Page' element = {<HomePage />} />
          <Route path='/create-ticket' element={<TicketForm />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path="/EditView/:id" element={<EditView/>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;