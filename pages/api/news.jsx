
export default function handler(req, res) {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

    // hola
    try{
        newsapi.v2.everything({
            q: 'amlo | Andrés Manuel López Obrador',
        }).then(response => {
            res.status(200).json(response)
        });
    }catch(err){
        res.send(error.message);
    }
}