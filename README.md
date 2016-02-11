# Chat app activity

We are going to build a chat app in a "single page app": the chats should seem real-time
and the page should not reload.

## Getting ready

1. Find a partner: one can chat alone but it is a rather sad experience.
2. Clone (or "fork") this repository on GitHub.
3. Start a new c9 workspace and clone your clone [inception] into it. (If you run this on your computer, you
would likely have trouble allowing others to chat with you due to your computer's firewall.) If you are a
ninja, knock yourself out.
4. Install the node dependencies for the server component.
```
npm install
```
5. Run the server
```
nodemon index.js
```
6. Open your app's URL in your browser(s). Multiple people can do this in order to chat.
7. Open your browser's JavaScript console so you can start debugging on the client side.
8. Browse the files in this repository, particularly `index.js`, `views/index.html`,
and `public/js/chat.js` to understand what is going on.
9. Follow the instructions marked "TODO" in the `public/js/chat.js` file in order to
get your chat app working. They are numbered, though you don't have to follow the
suggested order. (Further, if you are a ninja, you don't need to keep the function names
or structure that I suggested and you may instead enjoy socket.io.)

## How it works

The `index.html` file includes our `chat.js` file in the client browsers. What you need
to do is accept user input *without* submitting forms, POST those to the server, and 
poll the server for new chats messages, adding them to the DOM. This will force you to
use three client-side JavaScript abilities that we learned in the readings:

* [Event handling](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) to 
respond when the user hits the "submit" button and when new chats are received;
* [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) to send chats to the server
and receive new chats from the server;
* [DOM manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
to update the page when new chats are received.

If you are a begginner in client-side JavaScript, I recommend that you use [jQuery](http://jqfundamentals.com/). If you
are advanced, I recommend you use vanilla JavaScript (the above MDN articles will help a lot).

## Caveats

Astute observers will notice that this is an inelegant manner of achieving chat and that 
could have instead used websockets and good MVC structure in the client. We did not for
pedagodigical motivations.