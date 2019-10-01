$("audio").mouseleave(function(){
	$(this).addClass("hidden");
})

//Marissa path
$("#main-door-1").click(function(){
	$("#homepage").fadeOut();
	$("#marissa_audio").show();
})

$("#marissa_audio").mouseleave(function(){
	$("#marissa_1").show();
})






//Call to API to make image maps responsive
$('map').imageMapResize();