import React, { Component } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Search.css'


class Book extends Component {

    state = {
        Books: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {

        if(!sessionStorage.getItem('Username')){
            window.location.href = '/Login';
            }  
            
        const url = 'http://localhost/library/backend/Book.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Books: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }


    render() {
        const filteredBooks = this.state.Books.filter((book) => {
            if (this.state.Option === 'name') {
                return book.name.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'type') {
                return book.type.toLowerCase().includes(this.state.Input.toLowerCase())
            } else {
                return true
            }
        })

        return (
            <>
                <form>
                    <div className="search-container mx-2">
                        <select className="search-dropdown" value={this.state.Option} onChange={this.handleOptionChange}>
                            <option value="None">---None---</option>
                            <option value="name">Book Name</option>
                            <option value="type">type</option>
                 
                        </select>
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                            value={this.state.Input}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
                <div className='page' style={{ width: '1519px', height: '100vh', position: 'absolute', left: '0', top: '150px' }}>
                    <div className="page" style={{ padding: 20 }}>
                        <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                            <table className={`table`}>
                                <thead>
                                    <tr style={{ backgroundColor: '#d5ad18' }}>
                                        <th style={{ border: 'none' }}></th>
                                        <th colSpan={1} style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent: '480px' }}>Books Table</h1></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>Books ID</th>
                                        <th>Books Name</th>
                                        <th>Book Type</th>
                                        <th>Shelf </th>
                                        <th>Description</th>
                                        <th>Added By</th>
                                       
                                        <th colSpan={2} style={{ textAlign: "center" }}>Edit/Del</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredBooks.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.id}</td>
                                            <td>{rs.name}</td>
                                            <td>{rs.type}</td>
                                            <td>{rs.shelf_table}</td>
                                            <td>{rs.description}</td>
                                            <td>{rs.added_by}</td>
                                            <td><Link className="cssbuttons-io-buttondel"  onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/library/backend/DelBook.php'
                                                let fData = new FormData();
                                                fData.append('id', rs.id);
                                                fData.append('Added_by', sessionStorage.getItem('Username'));
                                                axios.post(url, fData)
                                                    .then(response => {
                                                        // alert(response.data)
                                                        if(response.data == 'UserError'){
                                                            window.location.href = '/Login';
                                                        }
                                                        else{
                                                            window.location.href = '/SearchBook';

                                                        }
                                                    })
                                                    .catch(error => alert(error))
                                            }}>
                                                <span>Delete</span>
                                            </Link></td>
                                            <td><Link className="cssbuttons-io-buttonupd"  onClick={this.handleUpdate = (e) => {
                                             
                                             window.location.href = '/EditBook/'+rs.id;
                                             
                                            }}>
                                                <span>Update</span>
                                            </Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Book