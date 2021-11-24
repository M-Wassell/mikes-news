import axios from 'axios';

const articlesApi = axios.create({
    baseURL:'https://mikes-news.herokuapp.com/api',
});

export const getTopics = () =>{
    return articlesApi.get('/topics').then((res) =>{
        return res.data.topics;
        
    });
};
export const getArticles = (individialTopic) =>{
        return articlesApi
        .get('/articles', {
            params: { topic: individialTopic},
        })
        .then((res) =>{
            console.log(res.data.articles);
            return res.data.articles;
        });
};