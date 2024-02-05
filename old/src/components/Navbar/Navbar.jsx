import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

export default function Navbar() {
    const [selected, setSelected] = useState();
    const navLinks = document.querySelectorAll(".nav-link");

    useEffect(() => {
        navLinks.forEach(link => {
            link.getAttribute('id') === selected ? link.classList.add('selected') : link.classList.remove('selected');
        })
    }, [selected]);

    return (
        <>
            <div className="navbar-container">
                <Link className="nav-link" onClick={() => setSelected('home')} to="/">
                    <img className="logo-img-navbar" src={logo} alt="Logo" />
                </Link>
                <Link className="nav-link" onClick={() => setSelected('home')} id="home" to="/">Home</Link>
                <Link className="nav-link" onClick={() => setSelected('who-we-are')} id="who-we-are" to="/who-we-are">Chi siamo</Link>
                <Link className="nav-link" onClick={() => setSelected('routes')} id="routes" to="/routes">Tratte indicative</Link>
                <Link className="nav-link" onClick={() => setSelected('where-we-are')} id="where-we-are" to="/where-we-are">Dove siamo</Link>
                <Link className="nav-link" onClick={() => setSelected('contact-us')} id="contact-us" to="/contact-us">Contattaci</Link>
            </div>
        </>
    );
}