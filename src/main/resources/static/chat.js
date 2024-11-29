var stompClient = null;
var roomId = null;
var name = null;

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    name = urlParams.get('name');
    roomId = urlParams.get('room');
    document.getElementById('room-name').textContent = roomId;
    connect();
};

function connect() {
    var socket = new SockJS('/server1');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/' + roomId, function (messageOutput) {
            showMessage(JSON.parse(messageOutput.body));
        });
    });
}

function sendMessage() {
    var messageContent = document.getElementById('message').value;
    if (messageContent && stompClient) {
        var message = {
            name: name,
            content: messageContent
        };
        stompClient.send("/app/message/" + roomId, {}, JSON.stringify(message));
        document.getElementById('message').value = '';
    }
}

function showMessage(message) {
    var response = document.getElementById('messages');
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(message.name + ": " + message.content));
    response.appendChild(p);
}

// Attach the event listener after the DOM is fully loaded
window.addEventListener('load', function() {
    const sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendMessage);
});