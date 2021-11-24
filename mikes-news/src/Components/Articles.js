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

    return(
        <main className="articles">
            <h2>Articles</h2>
            <ul>
                {articles.map((article) =>{
                    return (
                        <li key={article.article_id}>
                            <h3>{article.title}</h3>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Articles;