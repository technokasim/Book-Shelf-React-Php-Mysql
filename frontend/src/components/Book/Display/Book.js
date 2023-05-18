import React, { Component } from 'react';
import axios from 'axios';

class Book extends Component {

  


    state = {
        Books: []
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
    render() {
        return (
            <div className='page' style={{ width: '1519px', height: '100vh', position: 'absolute', left: '0', top: '150px' }}>
                <div className="page" style={{ padding: 20 }}>
                    <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                        <table className={`table`}>
                            <thead>
                                <tr style={{ backgroundColor: '#d5ad18' }}>
                                    <th style={{ border: 'none' }}></th>
                                    <th colSpan={2} style={{ border: 'none'}}><h1 style={{color: 'black', fontWeight:'bold', textIndent:'350px'}}>Books Table</h1></th>
                                    <th style={{ border: 'none'}}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                </tr>
                            </thead>
                            <thead style={{ color:'white' }}>
                                <tr>
                                    <th style={{ height: '40px' }}>Books ID</th>
                                    <th>Books Name</th>
                                    <th>Book Type</th>
                                    <th>Shelf </th>
                                    <th>Description</th>
                                    <th>Added By</th>
                                </tr>
                            </thead>
                            <tbody className="thead-light" style={{ color:'white' }}>
                                {this.state.Books.map((rs, index) => (
                                    <tr key={index}>
                                        <td>{rs.id}</td>
                                        <td>{rs.name}</td>
                                        <td>{rs.type}</td>
                                        <td>{rs.shelf_table}</td>
                                        <td>{rs.description}</td>
                                        <td>{rs.added_by}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book