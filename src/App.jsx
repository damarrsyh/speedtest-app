// import SpeedTestData from "./SpeedTestData"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/layout/Navbar';
// import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <div className={`content-container ${sidebarOpen ? 'expanded' : 'collapsed'}`}>
        <AppNavbar toggleSidebar={toggleSidebar} />
        <Container fluid>
          <Dashboard />
        </Container>
      </div>
    </div>
  );
}

export default App;



