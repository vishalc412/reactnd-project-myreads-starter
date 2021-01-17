import React from 'react';

const BookList = ({bookList=[]}) => {
  return (
    <>
    { bookList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
            <a>{data.image}</a>
            <a>{data.name}</a>
            <a>{data.author}</a>  
            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
	    </div>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default BookList