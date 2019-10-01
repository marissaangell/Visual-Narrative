$("audio").mouseleave(function(){
	$(this).addClass("hidden");
})

//Marissa path
$("#main-door-1").click(function(){ //id of map you are clicking
	$("#homepage").fadeOut(); //id of div you want to hide
	$("#marissa_audio").show(); //id of div you want to show
})

$("#marissa_audio").mouseleave(function(){
	$("#marissa_1").show();
})


//Troy path
$("#main-door-2").click(function(){ //id of map you are clicking
	$("#homepage").fadeOut(); //id of div you want to hide
	$("#troy_1").show(); //id of div you want to show
})




//Call to API to make image maps responsive
$('map').imageMapResize();