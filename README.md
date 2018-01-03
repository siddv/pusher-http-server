# pusher-http-server

## What

Small Node server that publishes an endpoint that clients can use to insecurely publish to pusher channels.

## Config

ENV vars:

```
PUSHER_APP_ID   - Your Pusher App ID
PUSHER_KEY      - Your Pusher App Key
PUSHER_SECRET   - Your Pusher App Secret
PUSHER_CLUSTER  - Your Pusher App Cluster 
PORT            - The port this server should be deployed on
```

## How

Run this node server using `npm start`, then POST to it in this format: 

```json
{
  "channel" : "your-pusher-channel",
  "event"   : "your-pusher-event",
  "data"    : {
    "message" : "your-pusher-message"
  }
}
```