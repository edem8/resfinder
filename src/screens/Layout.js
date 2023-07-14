import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Layout.css";
import SearchBar from "../components/SearchBar";

function Layout() {
  return (
    <>
      <div className="layout_container">
        <header>
          <nav>
            <h3>resFinder</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="tools">Tools</NavLink>

            <SearchBar />
          </nav>
        </header>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
