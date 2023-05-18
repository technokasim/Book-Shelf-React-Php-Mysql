import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './button.css'
import './navbar.css'

export default function Navbar(props) {

    const handleClick = () => {
        // props.change();
        sessionStorage.removeItem('Username');
        window.location.href = '/Login';

        
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-blue navbar-dark`}  >
            <div className="container-fluid">
                <img src='favicon.png' alt='Logo' className='mx-2' style={{ width: '50px', height: '50px' }}></img>
                <h1 className="navbar-brand my-1 mx-1" style={{ fontSize: '35px' }}><strong>{props.title}</strong></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" textmode="/"><h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px' }}>Home</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/AddBook"><h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px' }}>Add Book</h5></Link>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px' }}>Books</h5>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/SearchBook"><p style={{ color: 'white' }}>Search / Edit / Delete</p></Link></li>
                                <li><Link className="dropdown-item" to="/Books"><p style={{ color: 'white' }}>View All Books</p></Link></li>
                             </ul>
                        </li>
                    </ul>
                </div>
                <Link className="button2" to="/logOut" onClick={handleClick}>Logout</Link>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Book Library',
    aboutText: 'Book Library',
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}


