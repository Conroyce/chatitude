API.getChats(function(chats) {
  var context = [];

  chats.forEach(function(chat) {
    var ans = {};

    ans.user = chat.user;
    ans.message = chat.message;
    ans.time = chat.time;
    ans.id = chat.id;
    context.push(ans);
  });

  var source = $('#chat-template').html();
  var template = Handlebars.compile(source);
  var html = template({chats:context});

  $('.main').append(html);
});

$('.signup').on('click','.signup-submit',function(e) {
  var $username = $('#user-up').val();
  var $password = $('#pass-up').val();

  $.ajax({
    type: 'POST',
    url: 'http://chat.api.mks.io/signup',
    data: {username: $username, password: $password}
  }).success(function(status) {
    console.log("Creating User: ", status);
  })
})

var $apiToken = ""; 
$('.signin').on('click','.signin-submit',function() {
  var $username = $('#user-in').val();
  var $password = $('#pass-in').val();
  $apiToken = "";

  $.ajax({
    type:'POST',
    url: 'http://chat.api.mks.io/signin',
    data: {username: $username, password: $password}
  }).success(function(apiToken) {
    console.log(apiToken);
    $apiToken = apiToken.apiToken;
  });
});

$('.message').on('click','.mes-submit',function() {
  var $message = $('#enter-mes').val();
  console.log("message: " + $message) //prints correct message
  console.log("in message-submit: " + $apiToken) //prints apiToken

  $.post('http://chat.api.mks.io/chats',
    {
      apiToken: $apiToken,
      message: $message
    }).success(function(success) {
      console.log(success); 
    });

});

// API.postChats(function(chats) {
//   console.log("Sent chats:", chats)
// });

// $.ajax({
//   type: 'POST',
//   url: 'http://chat.api.mks.io/chats',
//   data: {apiToken: apiToken, message: message}
// }).success(function(chats) {
//   console.log("Sent chats:", chats)
// })

$.ajax({
  type: 'POST',
  url: 'http://chat.api.mks.io/signup',
  data: {username: username, password: password}
}).success(function(account) {
  conosole.log("sent account:", account)
})

$.ajax({
  type:'POST',
  url: 'http://chat.api.mks.io/signin',
  data: {username: username, password: password}
}).success(function() {
  console.log("sent account:", account)
})