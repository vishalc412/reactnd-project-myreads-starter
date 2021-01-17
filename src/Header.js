import { render } from "react-dom"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{

    return(
        <div> <faBookOpen />
        <div className="list-books-title">     
     <h1>MyReads</h1>
    </div>
    </div>
    );
}

export default Header;