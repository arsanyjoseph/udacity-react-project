import React from "react";
import './App.css'
import Book from "./book";
import {search, get} from './BooksAPI'
import {Link} from 'react-router-dom'
import { array } from "prop-types";

class Search extends React.Component {
  state = {
    query: '',
    booksResult: []
  }
 /* x = this.props.booksTotal.map((item) => this.updateShelfStatus(item))

  updateShelfStatus = (item) => this.state.booksResult.map((i) => {
    if (item.id == i.id) {
    let updatedArray1 = this.state.booksResult.filter((t) => t.id !== item.id)
    let updatedArray2 = this.props.booksTotal.filter((s) => s.id === i.id)
    let confirmArray = [...updatedArray1, ...updatedArray2]
    }
  })*/
    
  searchedBooks = this.state.booksResult.map((book) => get(book))
  updateQuery = (newQuery) => {
    this.setState({query: newQuery})
  }

  searchRequest = (query) => {
        search(query).then((result) => {
        if (Array.isArray(result)) {
          this.setState({booksResult: result})
      } else {
        this.setState({booksResult: []})
        }
      })
   }
  onType = (query) => {
    this.updateQuery(query)
    this.searchRequest(query)
  }
    render () {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" value = {this.state.query} 
                onChange = {(e) => {
                  this.onType(e.target.value)}}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.booksResult.length > 0 && 
                  this.state.booksResult.map(item => 
                    <li key={item.id}>
                      <Book bookItem = {item} checkShelf ={this.props.checkShelf} handleEvent = {this.props.handleEvent} changeShelf = {this.props.changeShelf}/>
                    </li>)}
                {this.state.booksResult.length == 0 && <div>No Results Found</div>}
              </ol>
            </div>
          </div>
        );
    }
}

export default Search