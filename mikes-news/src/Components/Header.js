import { BrowserRouter} from 'react-router-dom'
import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="header">
        <BrowserRouter>
            <Link to="/">
                <h1>NC News</h1>
            </Link>
        </BrowserRouter>
        </header>
    );
};

export default Header;