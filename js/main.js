$.ajax({
  type: 'GET',
  url: 'http://chat.api.mks.io/chats'
}).success(function (chats) {
  console.log("Got chats:", chats)
})