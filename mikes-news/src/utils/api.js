import axios from 'axios';

const articlesApi = axios.create({
    baseURL:'https://mikes-news.herokuapp.com/api',
});

export const getTopics = () =>{
    return articlesApi.get('/topics').then((res) =>{
        return res.data.topics;
    });
};
export const getArticles = () =>{
    return articlesApi.get('/articles').then((res) =>{
        return res.data.articles;
    });
};