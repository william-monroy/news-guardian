const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {

    const query = "with the following article: " + req.query.link + " . Write me an article that disproves the article above."

    try{
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:  query,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      
      res.status(200).json(response.data)
    }catch(err){
      res.send(error.message);
    }
}
