import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/sidekicks_logo.png';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const liStyle = {
    margin: '0 15px',
    fontSize: '18px'
  };

  const linkStyle = {
    color: '#000',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <Link to="/">
        <img src={logo} alt="Sidekicks Logo" style={{ height: '60px' }} />
      </Link>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/shop" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Shop
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/zapatillas" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Zapatillas
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/ropa" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Ropa
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/pedidos" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Pedidos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;