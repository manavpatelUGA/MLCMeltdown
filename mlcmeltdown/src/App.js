import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TicketForm from './components/TicketForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<p>Thing</p>} />
          <Route path='/create-ticket' element={<TicketForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
