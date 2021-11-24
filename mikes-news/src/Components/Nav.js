
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';

const Nav = () =>{
    const [topics, setTopics] = useState([]);

    useEffect(() =>{
        getTopics()
        .then((topics) =>{
            setTopics(topics);
        })
        .catch((err) =>{
            console.log(err);

        })
        }, []);

        console.log(topics);
    return (
            <nav className="nav">
                {topics.map((topic) =>{
                    return(
                        <Link key={topic.topic_slug} to={`/topics/${topic.slug}`}>
                            
                        <ul>{topic.slug}</ul>
                        
                        </Link>
                    );
                })}
            </nav>
        
    );
};

export default Nav;