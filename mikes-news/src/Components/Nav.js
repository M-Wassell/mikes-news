import { BrowserRouter} from 'react-router-dom'
import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <nav>
            <BrowserRouter>
                <Link to="/articles/topics">
                    <h1>Topics</h1>
                </Link>
            </BrowserRouter>
        </nav>
    );
};

export default Nav;