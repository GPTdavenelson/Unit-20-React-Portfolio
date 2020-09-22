// React
import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = (props) => {
    let history = useHistory();

    const handleClick = (value) => {
        history.push(`/${value}`);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top shadow">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Dave Nelson Bio
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" onClick={(e) => history.push('/')}>
                            <div className="nav-link">
                                About Me
                                <span className="sr-only">(current)</span>
                            </div>
                        </li>
                        <li className="nav-item" onClick={(e) => history.push('/portfolio')}>
                            <div className="nav-link">Portfolio</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
