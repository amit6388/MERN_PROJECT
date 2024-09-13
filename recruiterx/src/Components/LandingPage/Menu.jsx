import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-2"></div>

                <div className="col-sm-8">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img src="logo.png" alt="logo" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"  // Updated attribute for Bootstrap 5
                            data-bs-target="#navbarNavAltMarkup"  // Updated attribute for Bootstrap 5
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="  nav_space nav-item nav-link" to="/">
                                    Home <span className="sr-only"></span>
                                </Link>
                                <Link className="nav_space nav-item nav-link" to="/">
                                    Features
                                </Link>
                                <Link className="nav_space nav-item nav-link" to="/">
                                    Pricing
                                </Link>
                                <Link className="nav_space nav-item nav-link" to="/">
                                    Disabled
                                </Link>
                                <Link className="nav_space nav-item nav-link" to="/">
                                    <button type="button" className="btn btn-transition">Secondary</button>
                                </Link>
                                <Link className="nav_space nav-item nav-link" to="/">
                                    <button type="button" className="btn btn-transition">Secondary</button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </>
    );
};

export default Menu;
