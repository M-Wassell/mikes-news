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
export const updateArticleVote = async (article_id, userVote)=> {
    await articlesApi.patch(`/articles/${article_id}`, {inc_votes: userVote});
    console.log(article_id);
}

export const getSingleArticle = (article_id) =>{
    return articlesApi.get(`/articles/${article_id}`).then((data)=>{
        
        console.log(data);
    })
}