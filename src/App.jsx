//import { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
//import './App.css'


  export default function App() {
    return (
      <div>
        <h1>Bookkeeper!</h1>
      <nav
       style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
    <Outlet />  
  </div> 
    );
  }

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }
  //Outlet will be the action to swap between the two child routes (<Invoices> and <Expenses>)!
  