import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
        <div class="container">
            <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/list">User List</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/add">Add new user</NavLink>                    
                </li>
            </ul>
            </header>
        </div>

        <Outlet />
        </>
    )
}

export default Layout;