import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const NavBar = () => {

    const {authState} = useContext(AuthContext);
    const {auth}= authState;
  return (
    <nav className='navbar  navbar navbar-expand-lg navbar-dark bg-dark'>
        <span className="navbar-brand mb-0 h1 px-4">Examen</span>
        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li style={{ display: auth ? "none" : "block" }}>
                    <NavLink
                        className={({isActive})=> `nav-link ${isActive?'active':''}`}
                        to='login'>
                            Login
                    </NavLink>
                </li>

                <li style={{ display: auth ? "block" : "none" }}>
                    <NavLink
                        className={({isActive})=> `nav-link ${isActive?'active':''}`}
                        to='employees'>
                            Employees
                    </NavLink>
                </li>
                <li  style={{ display: auth ? "block" : "none" }}>
                    <NavLink
                        className={({isActive})=> `nav-link ${isActive?'active':''}`}
                        to='upload'>
                            Upload
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
