import React,{Fragment} from 'react';
import Book from './book';
class Read extends React.Component{
    render(){
        const {  books } = this.props;
      const booksOnThisShelf = books.filter(book => book.shelf === 'read');
        return(
            <Fragment>
       <h2 className="bookshelf-title">Read</h2>
<li>
                            
{booksOnThisShelf.map(book=>(<Book book={book}/>))}
                      </li>
                      </Fragment>
        );
    }
}
export default Read;