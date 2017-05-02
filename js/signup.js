var Player = AV.Object.extend('Player');

function releaseNewProduct() {
  var name = $('#inputName').val();
  var number = parseFloat($('#inputNumber').val());
  // var score1 = $('#score1').text();
  // var description = $('#inputDescription').val();
  
  // LeanCloud - 当前用户
  // https://leancloud.cn/docs/leanstorage_guide-js.html#当前用户
  // var currentUser = AV.User.current();

  // LeanCloud - 文件
  // https://leancloud.cn/docs/leanstorage_guide-js.html#文件
  // var file = $('#inputFile')[0].files[0];
  // var name = file.name;
  // var avFile = new AV.File(name, file);
  
  // LeanCloud - 对象
  // https://leancloud.cn/docs/leanstorage_guide-js.html#数据类型
  var player = new Player();
  player.set('name', name);
  player.set('number', number);
  // player.set('score',score1);
  // product.set('description', description);
  // product.set('owner', AV.User.current());
  // product.set('image', avFile);
  player.save();
  // rs();
  // setInterval("rs()",500);

};

function rs(argument) {
  // body...
  window.location.reload();
}
$(function(){
  $(".players").on('submit', function(e) {
    e.preventDefault();
    releaseNewProduct();
  });
});

