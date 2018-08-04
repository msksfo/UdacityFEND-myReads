import React, { Component } from 'react';
import '../App.css';
import Book from './Book'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types'


class SearchPage extends Component {
   
    render(){
       
        if (this.props.filteredBooks.length > 0){
            return (
                <div className='search-books'>

                    <SearchInput query={this.props.query}
                                 handleClick={this.props.handleClick}
                                 onTextChange={this.props.onTextChange}
                    />

                    <div className="search-books-results">
                        <ol className="books-grid">

                        {/* Conditional check for author property. If property does not exist, make the author 'anonymous' */}
                        {this.props.filteredBooks.map(book => {
                            if (book.authors){   
                                return <li key={book.id}>
                                            <Book bookTitle={book.title}
                                                authors={book.authors.join(', ')}
                                                bookCover={book.imageLinks}
                                                onChange={this.props.handleChange}  
                                                id={book.id}
                                                selected={book.shelf}
                                            />
                                        </li>
                                
                            } else {
                                return <li key={book.id}>
                                            <Book bookTitle={book.title}
                                                authors={`Anonymous`}
                                                bookCover={book.imageLinks}
                                                onChange={this.props.handleChange}  
                                                id={book.id}
                                                selected={book.shelf}
                                            />
                                        </li>
                            }
                           
                        })}
    
                        </ol>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='search-books'>

                    <SearchInput query={this.props.query}
                                 handleClick={this.props.handleClick}
                                 onTextChange={this.props.onTextChange}
                    />
                    <div className="search-books-results">
                        <ol className="books-grid">
                        </ol>
                    </div>
                </div>
            )
        }
        
    }    
    
}

SearchPage.propTypes = {
    handleClick: PropTypes.func.isRequired,
    query: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    filteredBooks: PropTypes.array.isRequired,
    onTextChange: PropTypes.func.isRequired
}

export default SearchPage;
