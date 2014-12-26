API.getChats(function(chats) {
  console.log("Got Chats:", chats);

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