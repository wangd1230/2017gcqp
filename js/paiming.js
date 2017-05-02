var query = new AV.Query('Player');
  query.find().then(function (players) {
  	var arry= new Array();
  	var i=0;
 	players.forEach(function(player) {
      var a =player.get('score');
      var b = player.get('name');
      arry[i]=[a,b];
      console.log(arry[i]);
      i += 1;
    });
    arry.sort(function(a, b) {
  	return b[0] - a[0];
	});
	var k =0;
	var z= 1;
	arry.forEach(function () {
		// body...
		console.log(arry[k][1]);
		$('#paiming1').append("<li>"+z+"、"+arry[k][1]+"</li>");
		k +=1;
		z +=1;
	})
	
    // console.log(arry[1]);
  });
  $('#btnn').click(function() {
  	// body...
  	$('#paiming').css('display','block');
  });
  