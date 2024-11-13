import './Navbar.css';

interface navbar { }

const Navbar: React.FC<navbar> = () => {
  return (
    <div id="navbar">
      <h1>Farmville</h1>
    </div>
  );
};

export default Navbar;
