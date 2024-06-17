import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark " >
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" style={{ color: "#fda90d" }} onClick={closeNavbar}>HOME</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" onClick={closeNavbar}>ABOUT</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" onClick={closeNavbar}>SERVICE</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" onClick={closeNavbar}>MENU</a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: 'white', fontSize: "19px" }}
                                onClick={closeNavbar}
                            >
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: 'black' }}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Booking</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Our Team</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'white' }}>Testimonial</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" onClick={closeNavbar}>CONTACT</a>
                        </li>
                    </ul>
                    <button className="btn px-2" style={{ color: "white", height: "50px", width: "150px", backgroundColor: "#fda90d", borderRadius: "8px" }}>BOOK A TABLE</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
