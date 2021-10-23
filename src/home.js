import React from "react";
import './App.css';
import Book from "./book";
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render () {
          return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((bookItem) => bookItem.shelf === 'currentlyReading').map((item) => <li key= {item.id}><Book checkShelf = {this.props.checkShelf} changeShelf = {this.props.changeShelf} bookItem = {item}/></li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((bookItem) => bookItem.shelf === 'wantToRead').map((item) => <li key={item.id}><Book checkShelf = {this.props.checkShelf} changeShelf = {this.props.changeShelf} bookItem = {item}/></li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter((bookItem) => bookItem.shelf === 'read').map((item) => <li key={item.id}><Book checkShelf = {this.props.checkShelf} changeShelf = {this.props.changeShelf} bookItem = {item}/></li>)}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link to = '/search' className ='open-search button'>Search</Link>
            </div>
          </div>
        );
    }
}

export default Home