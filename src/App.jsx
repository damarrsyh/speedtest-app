import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap';
import AppNavbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <div className='content-container'>
        <AppNavbar/>
        <Container fluid>
          <Dashboard/>
        </Container>
      </div>
    </div>
  );
}

export default App;
