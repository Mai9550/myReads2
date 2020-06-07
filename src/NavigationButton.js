import React,{Component} from 'react';

class NavigationButton extends Component {
  state = {
    value: this.props.shelf,
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.moveBook(this.props.book, event.target.value);
  };
  render() {
    const {move,moveBook}=this.props;
    
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.handleChange} moveBook={this.props.moveBook}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default NavigationButton;