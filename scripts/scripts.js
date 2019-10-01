$("audio").mouseleave(function(){
	$(this).addClass("hidden");
})



$("#mapto_1-2").click(function(){
	$("#page_1").fadeOut();
	$("#page_1-2").show();
})

$("#mapto_1-3").click(function(){
	$("#page_1-2").fadeOut();
	$("#page_1-3").show();
})




//Call to API to make image maps responsive
$('map').imageMapResize();