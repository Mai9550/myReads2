import React,{Fragment} from 'react';
import Book from './book';
class Read extends React.Component{
    render(){
        const {  books,move,moveBook } = this.props;
      const booksOnThisShelf = books.filter(book => book.shelf === 'read');
        return(
            <Fragment>
       <h2 className="bookshelf-title">Read</h2>
<ul>
                            
{booksOnThisShelf.map(book=>(<Book book={book} moveBook={moveBook}/>))}
                      </ul>
                      </Fragment>
        );
    }
}
export default Read;