const express = require('express')
const helmet = require('helmet')
const serviceInstance = require('./service')
const PORT = process.env.PORT || 9000
const app = express();


const service = serviceInstance();

app.use(helmet());

app.get('/encode/:url', (req,res) => {
    const { url } = req.params;
    const encoded = service.encode(url);
    return res.send({encoded})
})

app.get('/decode/:encodedUrl', (req,res) => {
    const { encodedUrl } = req.params;
    const decodedUrl = service.decode(encodedUrl);
    return res.send({decodedUrl})
})

app.get('/', (_,res) => {
    const urls = service.urls;
    return res.send(urls)
})

app.listen(PORT, (error) => error ?        
        console.error('Failed to listen the server',error) :
        console.log(`Server running on PORT ${PORT}`)
)