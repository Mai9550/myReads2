/**I give attributes to this great online resource:https://james-priest.github.io/reactnd-project-myreads/?fbclid=IwAR2tP3HwqU6V7KpuD_ZVkyQhLwbq9Rw879sSJByivWpYadwmkalJa8zAMCA */
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
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.searchBooks.filter(b => b.id !== book.id);
    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }
  }
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
 const {move,moveBook}=this.props;
    return (
      <div className="app">
        
        
        <Route exact path="/" render={()=><BookList books={books} moveBook={this.moveBook}/>} />
        <Route path="/search" render={() => (
            <SearchBar
              books={books}
              searchForBooks={this.searchForBooks}
              searchBooks={searchBooks}
              moveBook={this.moveBook}
              />
      
        )}
        />
      </div>
    )
  }
}
  


class BookList extends Component {
  
  render() {
    
      
    const {books,move,moveBook}=this.props;
    return (
      <div className="list-books">
        

<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
            <Shelves books={books} moveBook={moveBook}/>
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
  state = {
    value: '',
  };
  handleChange = event => {
   const val = event.target.value;
    this.setState({ value: val })
    this.props.searchForBooks(val)


  };
  render() {
    const {books,searchForBooks,searchBooks,moveBook}=this.props;
    
    return (
      <div className="search-books">
            <div className="search-books-bar">
            <Link to="/"><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> 
              {searchBooks.map(book=>(<Book book={book} moveBook={this.props.moveBook}/>))}
              </ol>
            </div>
          </div>
    )
  }
}
          
     

export default App
