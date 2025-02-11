import "bootstrap/dist/css/bootstrap.min.css"
import AppNavbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {

  return (
    <>
      <AppNavbar/>
        <Sidebar/>
        <Dashboard/>
    </>
  );
}

export default App;
