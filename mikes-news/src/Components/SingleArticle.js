import { useParams } from "react-router";


function SingleArticle(){

    const {article_id} = useParams()
    console.log(article_id);

    return(
    <header>Single Article</header>
    )
}

export default SingleArticle;