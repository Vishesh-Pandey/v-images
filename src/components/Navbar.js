import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-${(props.theme === "dark") ? "light" : "dark"} navbar-expand-lg bg-${(props.theme === "dark") ? "light" : "dark"} sticky-top`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">vImages</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/low" className="nav-link" aria-current="page" href="#">Low Quality</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/v-images" className="nav-link bg-danger rounded" aria-current="page" href="#">High Quality</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked=""
                                onClick={props.changeTheme}
                            />
                            <label className={`form-check-label text-${(props.theme === "light" ? "light" : "dark")}`} htmlFor="flexSwitchCheckChecked">
                                {(props.theme === "light" ? "Disable Dark Mode" : "Enable Dark mode")}
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar