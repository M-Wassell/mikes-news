import React, {useEffect, useState} from "react";
import { getArticles} from "../utils/api";

const Articles = () =>{
    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        getArticles()
        .then((articles) => {
            setArticles(articles);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    console.log(articles);
    return(
        <main className="articles">
            <h2>Articles</h2>
            <ul>
                {articles.map((article) =>{
                    return (
                        <li key={article.article_id}>
                            <h3>{article.article_title}</h3>
                            <p>{article.console}</p>
                            <p>Votes: {article.votes}</p>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Articles;