import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import LibraryPortalHome from './components/Home/LibraryPortalHome';
import LoginPage from './components/LogReg/LoginPage';
import Register from './components/LogReg/Register';
import Book from './components/Book/Display/Book';
import EditBook from './components/Book/Add/EditBook';
import AddBook from './components/Book/Add/AddBook';
import SuccessBook from './components/Book/Add/SuccessBook';
import SearchBook from './components/Book/Search/SearchBook';

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  const isLogged = sessionStorage.getItem('Username');

  // const change = () => {
  //   setIsLogged(!isLogged);
  // }

  return (
    <>
      <Router>
        <div>
          {isLogged ?
            <Navbar mode='dark'
              searchMode='black'
              textMode='white'
              btnMode='light'
             />
            :
            <Navbar2 mode='light'
              searchMode='light'
              textMode='white'
              btnMode='dark'
            />
          }
          <div className="container my-3" >
            <Routes>
              <Route path='/' element={<LibraryPortalHome box_shadow="section1" isLogged={isLogged}></LibraryPortalHome>}></Route>
              <Route path='/Login' element={<LoginPage btnMode='dark' cardMode='#d5ad18' ></LoginPage>}></Route>
              <Route path='/Register' element={<Register btnMode='dark' cardMode='#d5ad18'></Register>}></Route>
              <Route path='/Books' element={<Book mode='dark'></Book>}></Route>
              <Route path="/AddBook" element={<AddBook></AddBook>}></Route>
              <Route path="/EditBook/:id" element={<EditBook></EditBook>}></Route>
              <Route path="/SuccessBook" element={<SuccessBook mode='dark' btnMode='light' />}></Route>
              <Route path="/SearchBook" element={<SearchBook></SearchBook>}></Route>
              
             </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;