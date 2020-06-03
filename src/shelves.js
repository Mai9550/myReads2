import React,{Fragment,Component} from 'react';
import Currentlyreading from './Currentlyreading.js';
import WantToRead from './wantToread.js';
import Read from './Read.js'
class Shelves extends Component{
  
render(){
  const {books}=this.props;
    return(  
        <Fragment>   
          <div className="bookshelf">
                 
                    <div className="bookshelf-books">
                     <ol className="books-grid">
                     <Currentlyreading books={books} />  
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <WantToRead books={books} />
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Read books={books} />
                    </ol>
                  </div>
                </div>
                <div className="open-search"></div>
          
                </Fragment>     

    );
}
}
export default Shelves;