import { Navbar, Nav} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaDesktop, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {

  const location = useLocation();

  return (
    <div className="sidebar">
    <Navbar expand="lg" className="flex-column">
      <Nav className="flex-column w-100 px-3">
        <Nav.Link as={Link} to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
            <FaTachometerAlt className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/devices" className={location.pathname === "/devices" ? "active" : ""}>
            <FaDesktop className="me-2" /> Devices
        </Nav.Link>
        <Nav.Link as={Link} to="/reports" className={location.pathname === "/reports" ? "active" : ""}>
            <FaChartBar className="me-2" /> Reports
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" className={location.pathname === "/settings" ? "active" : ""}>
            <FaCog className="me-2" /> Settings
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Sidebar;
