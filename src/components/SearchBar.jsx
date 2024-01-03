import React from "react";
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword : props.judul || '',
        
      };
      this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    
  
    onKeywordChangeHandler(e) {
      const {value} = e.target;
      this.setState({
        keyword : value,
      });
      
    }
  
    onSubmitHandler(e) {
      e.preventDefault();
      this.props.searchHandler(this.state.keyword);
    }
  
    render() {
      return(
        <form onSubmit={this.onSubmitHandler} >
          <input 
            type="text"
            placeholder="Search Movie By Title"
            onChange={this.onKeywordChangeHandler}
            value={this.state.keyword}
          />
          <button type="submit">Search</button>
        </form>
      ) ; 
    }
}

SearchBar.propTypes = {
  keyword : PropTypes.string.isRequired,
  searchHandler : PropTypes.func,
}

export default SearchBar;