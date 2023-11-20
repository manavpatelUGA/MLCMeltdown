import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TicketForm from './components/TicketForm';
import HomePage from './components/HomePage';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<p>thing</p>} />
        <Route path = '/Home-Page' element = {<HomePage />} />
        <Route path='/create-ticket' element={<TicketForm />} />
      </Routes>
    </Router>
  );
};

export default App;