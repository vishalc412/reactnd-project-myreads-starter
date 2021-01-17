import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';



class BookSearch extends Component{

	state = {
		query: '',
		books: []
	}

  static propTypes = {
    bookChange: PropTypes.func.isRequired
 }

	searchBooks = (query) =>{
		console.log(query.target.value)
		this.setState({query: query.target.value})

		BooksAPI.search(query.target.value,10).then((books) =>{
	    	console.log(books)
	    	this.setState({books : books});
			console.log(this.state.books)
		})
		console.log(this.state.books)
		
 	}

	render(){

    if(this.state.books){
		const bookSearch =  this.state.books.map((book) => 
				<li key={book.id}>
					<div className="book">
						<div className="book-top">
              
							<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })`}}></div>
              <div className="book-shelf-changer">
								<select onChange={(event) => this.props.bookChange(book, event.target.value)}>
									<option>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title">{ book.title }</div>
						<div className="book-authors">{ book.authors}</div>
					</div>
				</li>
			) ;

		
		return(
			
			<div>	
			<div className="search-books">
            	<div className="search-books-bar">
              		{/* <Link className="close-search" to='/'>Close</Link> */}
              		<div className="search-books-input-wrapper">
                		{/*
                  			NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  			You can find these search terms here:
                  			https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
		
                  			However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  			you don't find a specific author or title. Every search is limited by search terms.
                		*/}
                		<input 
                  			type="text" 
                  			placeholder="Search by title or author" 	
                  			onChange={ this.searchBooks}
                		/>	
              		</div>
            	</div>
            	<div className="search-books-results">
              		<div className="bookshelf">
				<h2 className="bookshelf-title">{ this.state.query }</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{ bookSearch }
					</ol>
				</div>
			</div>
            </div>
			</div>
			
			</div>
    )
                  }
	}
}

export default BookSearch;