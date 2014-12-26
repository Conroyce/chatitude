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
  console.log($('#user-up').val() + " " + $('#pass-up').val());

  $.ajax({
    type: 'POST',
    url: 'http://chat.api.mks.io/signup',
    data: {username: $username, password: $password}
  }).success(function(status) {
    console.log("Creating User: ", status);
  })
})

$('.signin').on('click','.signin-submit',function() {
  var $username = $('#user-in').val();
  var $password = $('#pass-in').val();
  console.log($('#user-in').val() + " " + $('#pass-in').val());

  $.ajax({
    type:'POST',
    url: 'http://chat.api.mks.io/signin',
    data: {username: $username, password: $password}
  }).success(function(apiToken) {
    console.log(apiToken);
  });
});

API.postChats(function(chats) {
  console.log("Sent chats:", chats)
});

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