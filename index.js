require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher')
const app = express()

var pusher = new Pusher({
  appId: process.env['PUSHER_APP_ID'],
  key: process.env['PUSHER_KEY'],
  secret: process.env['PUSHER_SECRET'],
  cluster: process.env['PUSHER_CLUSTER'],
  encrypted: true
});


app.use(bodyParser.json({
    'strict': false
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/', (request, response) => {

    console.log(`Pusher reuqest: ${request.body}`)

    try {

        pusher.trigger(
            request.body.channel,
            request.body.event,
            request.body.data,
    
            (error, pusherRequest, pusherResponse) => {
    
                response.send(JSON.stringify({
                    status: 200,
                    body: request.body
                }));
    
            }
        );

    } catch (error) {

        response.send(JSON.stringify({
            status: 400,
            body: error
        }));

    }


});

app.listen(process.env['PORT'], () => {

    pusher.trigger('status', 'node', 'now online');

    console.log(`Express application running on port ${process.env['PORT']}`)

});
