import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
    app_id: "1758946",
    key: "8b71e4513f6d1886c175",
    secret: "81db8fdf563031b0075d",
    cluster: "eu"
})

export const pusherClient = new PusherClient(
    "8b71e4513f6d1886c175",
    {
        cluster: 'eu',
    }
);