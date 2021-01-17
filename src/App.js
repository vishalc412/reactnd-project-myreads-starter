import React from 'react'

import './App.css'
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch';
class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books})
    })
  }

  bookChange(book,shelf){
    BooksAPI.update(book,shelf)
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            {
            <BookSearch books={this.state.books} bookChange={this.bookChange}/>
            }
            
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.books.filter(book => book.shelf ==="currentlyReading").map((filteredBook) => 
                      <li key={filteredBook.id}>
                        <div className="book">
                          <div className="book-top">
                            
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${filteredBook.imageLinks.thumbnail}})`}}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => this.bookChange(filteredBook, event.target.value)}>
                                <option>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{ filteredBook.title }</div>
                          <div className="book-authors">{ filteredBook.authors}</div>
                        </div>
                      </li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.state.books.filter(book => book.shelf ==="wantToRead").map((filteredBook) => 
                      <li key={filteredBook.id}>
                        <div className="book">
                          <div className="book-top">
                            
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${filteredBook.imageLinks.thumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => this.bookChange(filteredBook, event.target.value)}>
                                <option>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{ filteredBook.title }</div>
                          <div className="book-authors">{ filteredBook.authors}</div>
                        </div>
                      </li>)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.state.books.filter(book => book.shelf ==="read").map((filteredBook) => 
                      <li key={filteredBook.id}>
                        <div className="book">
                          <div className="book-top">
                            
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${filteredBook.imageLinks.thumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => this.bookChange(filteredBook, event.target.value)}>
                                <option>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{ filteredBook.title }</div>
                          <div className="book-authors">{ filteredBook.authors}</div>
                        </div>
                      </li>)}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp;