"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Navbar from "./Navbar";



const Header = () => {
  // Bootstrap JavaScript ko dynamically load karein
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (

    <>
    <Navbar></Navbar>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="Home"><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" width="50px" height="50px"  /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto gap-3" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                New&Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link "href="#" >
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link "href="#" >
                Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Snkrs
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark rounded-pill text-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
