import { Navbar} from 'react-bootstrap';
import { FaChartLine } from 'react-icons/fa';

const AppNavbar = () => {
  return (
    <Navbar 
      className="fixed-top w-100 shadow-sm"
      style={{ zIndex: 1030 }}
    >
      <Navbar.Brand href="#home" style={{ marginLeft: '20px' }}>
        <FaChartLine style={{ marginRight: '10px', color: '#b31e1e' }} />
        Speedtest Tracker
      </Navbar.Brand>
    </Navbar>
  );
};

export default AppNavbar;
