import { Navbar, Nav} from 'react-bootstrap';
import { FaTachometerAlt, FaDesktop, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Navbar expand="lg" className="flex-column">
      <Nav className="flex-column w-100">
        <Nav.Link href="#">
            <FaTachometerAlt className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link href="#">
            <FaDesktop className="me-2" /> Devices
        </Nav.Link>
        <Nav.Link href="#">
            <FaChartBar className="me-2" /> Reports
        </Nav.Link>
        <Nav.Link href="#">
            <FaCog className="me-2" /> Settings
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
  )
}

export default Sidebar
