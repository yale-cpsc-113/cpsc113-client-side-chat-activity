"use strict";
console.log('You should see this log message in your console');

// Put all your code in this anonymous function, which is executed
// immediately; That way, we do not "pollute" the global namespace in
// our web browser.
//
(function(){
    
    var chats = [];

    function updateDOM(startIndex){
        var chatList = document.getElementById('chats');
        function createListElement(text){
            var li = document.createElement('li');
            var content = document.createTextNode(text);
            li.appendChild(content);
            return li;
        }
        for (var i = startIndex; i < chats.length; i++) {
            chatList.appendChild(createListElement(chats[i]));
        }
    }

    function fetchChatsFromServer(){
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if(httpRequest.readyState !== XMLHttpRequest.DONE){
                return;
            }
            // Call this function again in 2s
            setTimeout(fetchChatsFromServer, 2000);
            
            if(httpRequest.status !== 200){
                return;
            }
            try {
                var newChats = JSON.parse(httpRequest.responseText);
            } catch (e) {
                console.log('Failed to parse chats!');
                return;
            }
            var startIndex = chats.length;
            for (var i = 0; i < newChats.length; i++) {
                chats.push(newChats[i]);
            }
            updateDOM(startIndex);
        };
        httpRequest.open('GET', '/chats/' + chats.length);
        httpRequest.send();
    }
    
    function sendChatMessage(message){
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', '/chats/');
        // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // httpRequest.send('message=' + encodeURIComponent(message));
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify({message: message}));
    }
    
    function startAcceptingUserChats(){
        var submitButton = document.getElementById('submit');
        console.log(submitButton);
        submitButton.addEventListener('click', function(){
            var input = document.getElementById('message');
            sendChatMessage(input.value);
        });
    }
    
    // This event is fired when all the content on the page
    // is loaded. It's like jQuery's `onReady` event, but it
    // is vanilla ECMAScript.
    //
    document.addEventListener("DOMContentLoaded", function() {
        console.log('The DOM is loaded!');
        startAcceptingUserChats();
        fetchChatsFromServer();
    });
    
})();

