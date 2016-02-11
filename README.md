# Chat app activity

We are going to build a chat app in a "single page app": the chats should seem real-time
and the page should not reload.

## Getting ready

1. Find a partner: one can chat alone but it is a rather sad experience.
2. Clone or fork this repository on GitHub.
3. Start a new c9 workspace and clone your clone [inception] into it. (If you run this on your computer, you would likely have issues with your firewall, etc.)
4. Install the node dependencies for the server component.
```
npm install
```
5. Run the server
```
nodemon index.js
```
6. Open your app's URL in your browsers. Multiple people can do this in order to chat.
7. Open your browsers JavaScript console so you can start debugging on the client side.
8. Browse the files in this repository, particularly `index.js`, `views/index.html`,
and `public/js/chat.js` to understand what is going on.
9. Follow the instructions marked "TODO" in the `public/js/chat.js` file in order to
get your chat app working.