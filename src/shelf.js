import React from "react";
import './App.css';

class Shelf extends React.Component{
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                    
                    </li>
                </ol>
                </div>
            </div>
        );
    }
}

export default Shelf