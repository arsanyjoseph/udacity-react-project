import React, {Component} from 'react'
import './App.css'
import Search from './search'
import Home from './home'
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [],
    }
    
  componentDidMount () {
    BooksAPI.getAll().then( e => this.setState ({books : e})).then(()=>{
      localStorage.setItem('books', JSON.stringify(this.state.books))
    })
    
  }
  

  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf).then(()=> {BooksAPI.getAll().then( e => this.setState ({books : e})).then(()=>{
      localStorage.setItem('books', JSON.stringify(this.state.books))
    })})
  } 

  
  render() {
    return (
      <div className="app">
        <Route exact path= '/' render= {() => (<Home books = {this.state.books} changeShelf = {this.changeShelf}/>)}/>
        <Route exact path= '/search' render = {() => <Search booksTotal = {this.state.books} checkShelf ={this.checkShelf} changeShelf = {this.changeShelf}/>}/>
        </div>
    )
  }
}

export default BooksApp