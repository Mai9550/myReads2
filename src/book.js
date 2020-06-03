import React from 'react';
import NavigationButton from './NavigationButton.js';
class Book extends React.Component{
    render(){
   const {book,shelf}  = this.props;
   
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'})`,
            }}
          />
          <NavigationButton book={book} shelf={shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown Author'}</div>
      </div>
    </li>
    
  );
}
};
export default Book;