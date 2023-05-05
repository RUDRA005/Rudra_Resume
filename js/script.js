var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
e.preventDefault()
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var subject = document.getElementById('subject').value;
var message = document.getElementById('message').value;
var body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject: ' +subject + '<br/> message: '+ message;


})

Email.send({
SecureToken : "021e8ea7-d594-4697-8ccf-c274e3be1d74",
To : 'rudraprasadpadhy3@gmail.com',
From : "rdxcommunication30@gmail.com", 
Subject : "Contact Me",
Body : body
}).then(
message => alert(message)
);
s