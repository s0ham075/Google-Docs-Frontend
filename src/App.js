import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import UserPage from './UserPage';
import DocumentPage from './DocumentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/:documentId" element={<DocumentPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
