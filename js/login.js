function login() {
  var username = $('#inputUsername').val();
  var password = $('#inputPassword').val();

  // LeanCloud - 登录
  // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
  AV.User.logIn(username, password).then(function (loginedUser) {
    window.location.href = "./../products-list/products-list.html";
  }, function (error) {
    signup();
  });
};

$(function() {
  $(".form-signin").on('submit', function(e) {
    e.preventDefault();
    login();
  });
});
function signup() {
  var username = $('#inputUsername').val();
  var password = $('#inputPassword').val();
  var name = $('inputName').val();
  
  // LeanCloud - 注册
  // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.setEmail(email);
  user.signUp().then(function (loginedUser) {
    window.location.href = "./../products-list/products-list.html";
  }, (function (error) {
    alert(JSON.stringify(error));
  }));
};
