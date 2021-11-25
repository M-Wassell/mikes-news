import React, {useEffect, useState} from "react";
import { getArticles, getSingleArticle, updateArticleVote} from "../utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


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

    updateArticleVote()

    return(
        <main className="articles">
            <h2>Articles</h2>
            <ul>
                {articles.map((article) =>{
                    return (
                        <li key={article.article_id}>
                            {/* <Link to={`/article/ ${article.article_id}`}>{article.vote}</Link> */}
                            <h3>{article.title}</h3>
                            <p>{`Votes ${article.vote}`}</p>
                            {/* <p>{articles.title}</p> */}
                            <p>{article.body}</p>
                            <button onClick = {getSingleArticle}  
                             
                            ></button>
                            <Link to={`/articles/${article.article_id}`}>Signle Article this way</Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Articles;