import React, {useEffect, useState} from "react";
import { getArticles} from "../utils/api";
import { useParams } from "react-router";

const Articles = () =>{
    const [articles, setArticles] = useState([]);
    const {topic_name} = useParams();

    console.log(topic_name);

    useEffect(() =>{
        getArticles(topic_name)
        .then((articles) => {
            setArticles(articles);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [topic_name]);

    return(
        <main className="articles">
            <h2>Articles</h2>
            <ul>
                {articles.map((article) =>{
                    return (
                        <li key={article.article_id}>
                            <h3>{article.title}</h3>
                            <p>{articles.title}</p>
                            <p>title: {article.body}</p>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Articles;