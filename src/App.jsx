import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import DevicePage from './pages/DevicesPage';
import ReportPage from './pages/ReportPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {

  return (
    <Router>
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="content p-4">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard"/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/devices" element={<DevicePage/>}/>
            <Route path="/reports" element={<ReportPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
