window.API = (function() {
  var api = 'http://chat.api.mks.io/';
  var chats = api + "chats";
  var signup = api + "signup";
  var signin = api + "signin";

  var getChat = function(callback) {
    $.ajax({
      type: "GET",
      url: chats
    }).success(callback);
  };

  var postChat = function(callback) {
    $.ajax({
      type: "POST",
      url: chats,
      data: {apiToken: apiToken, message: message}
    }).success(callback)
  };

  return {
    getChats: getChat,
    postChats: postChat
  }

})()