
import React,{Component} from 'react';
import * as BooksAPI from './BooksAPI';
import getAll from './BooksAPI.js';
import './App.css';
import {Route,Link} from 'react-router-dom';
import Shelves from './shelves.js';
import {debounce} from 'throttle-debounce';
import Book from './book'

class App extends Component {
  state = {
    books:[],
    searchBooks:[],
  };
  
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };

  searchForBooks = debounce(300, false, query => {
    console.log(query);
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        console.log(books);
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  render() {
    const { books,searchBooks} = this.state;
 
    return (
      <div className="app">
        
        
        <Route exact path="/" render={()=><BookList books={books}/>} />
        <Route path="/search" render={() => (
            <SearchBar
              books={books}
              searchForBooks={this.searchForBooks}
              />
      
        )}
        />
      </div>
    )
  }
}

class BookList extends Component {
  
  render() {
    
      
    const {books}=this.props;
    return (
      <div className="list-books">
        

<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
            <Shelves books={books} />
          </div>
          
        </div>
        <div className="open-search">
        <Link to="search">
            <button >Add a book</button>
            </Link>
          </div>
   </div>
  );
}
}
class SearchBar extends Component {
  render() {
    const {books,searchForBooks,searchBooks}=this.props;
    
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" >Close</button>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" value={searchBooks} onChange={(event)=>searchForBooks(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> 
              {searchBooks.map(book=>(<Book book={book}/>))}
              </ol>
            </div>
          </div>
    )
  }
}
          
     

export default App
