import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TicketForm from './components/TicketForm';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import EditView from './components/EditView';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path = '/Home-Page' element = {<HomePage />} />
        <Route path='/create-ticket' element={<TicketForm />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/EditView/:id" element={<EditView/>} />
      </Routes>
    </Router>
  );
};

export default App;