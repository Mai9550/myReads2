import React,{Fragment} from 'react';
import Book from './book';
class currentlyReading extends React.Component{

    render(){
      const {  books,move,moveBook } = this.props;
  const booksOnThisShelf = books.filter(book => book.shelf === 'currentlyReading');
       return(
           <Fragment>
 
            <h2 className="bookshelf-title">Currently Reading</h2>
                        <li>
                        {booksOnThisShelf.map(book=>( 
                        <Book  book={book} moveBook={moveBook}/>
                        ))}
                      </li>
                      </Fragment>
        );
        }
}
export default currentlyReading;