import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js';
import Header from './Header.js';
import PropTypes from 'prop-types';

class ListBooks extends Component{
  
  state={
    books:[]
  }
  
    render(){
      const {getCRBooks} = this.props
          
        return(

          
            <div className="list-books">
                <Header/>
            <div className="list-books-content">
              <div>
                <CurrentlyReading getCRBooks={getCRBooks}/>
                <WantToRead/>
                <Read/>
              </div>
            </div>
            
          </div>
        )
    }
}
    export default ListBooks;
