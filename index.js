require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.post('/', (request, response) => {

    console.log('req', request.body);
    response.send('Hello World!')

});

app.listen(process.env['PORT'], () => {
    console.log(`Express application running on port ${process.env['PORT']}`)
});
