import React from 'react';
import './LibraryPortal.css';
import BookImage from './Images/book.jpg';
import AuthorImage from './Images/author.jpg';
import EventImage from './Images/event.jpg';
import { Link } from "react-router-dom";

function LibraryPortal(props) {
  return (
    <div className='mainbody'>
      <header className="header">
        <h1><span className="welcome">Welcome to the </span><span className="highlight">Book Shelf</span> <span className="web-portal">Library</span></h1>
      </header>
      <main className="main">
      <section className={`${props.box_shadow}`}>
          <img src={EventImage} alt="Events" className="section-image" />
          <h2 className="section-title">Add Book</h2>
          <p className="section-description">Add New Book To Table</p>
          {
            props.isLogged ?
              <Link className="btn btn-dark" to='/AddBook'>Add New Book</Link>
              :
              <span className="btn btn-dark">Add New Book</span>

          }
        </section>
        <section className='section1'>
          <img src={BookImage} alt="Books" className="section-image" />
          <h2 className="section-title">Books</h2>
          <p className="section-description">Explore our collection of books</p>
          {props.isLogged ?
            <Link className="btn btn-dark" to="/Books" disabled>View All Books</Link>
            :
            <span className="btn btn-dark">View All Books</span>
          }
        </section>
        <section className={`${props.box_shadow}`}>
          <img src={AuthorImage} alt="Authors" className="section-image" />
          <h2 className="section-title">Search Or Update</h2>
          <p className="section-description">Search, Update Or Delete book details</p>
          {
            props.isLogged ?
              <Link className="btn btn-dark" to="/SearchBook">Update Book</Link>
              :
              <span className="btn btn-dark">Update Book</span>
          }
        </section>
     
      </main>
      <footer className="footer-07">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-12 text-center">
              <p className="footer-text">Book Shelf Library Project Using PHP and React</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LibraryPortal;
