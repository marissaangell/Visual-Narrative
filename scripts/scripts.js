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

	//start of marissa path 1
	$("#arch1").click(function(){ 
		$("#marissa_1").fadeOut();
		$("#marissa_2-1").show();
	})

	$("#arch_to_outside").click(function(){ 
		$("#marissa_2-1").fadeOut();
		$("#marissa_3-1").show();
	})

	$("#junglestairs").click(function(){ 
		$("#marissa_3-1").fadeOut();
		$("#marissa_4-1").show();
	})


	//start of marissa path 2
	$("#arch2").click(function(){
		$("#marissa_1").fadeOut();
		$("#marissa_2-2").show();
	})

	$("#overgrowth").click(function(){
		$("#marissa_2-2").fadeOut();
		$("#marissa_3-2").show();
	})

	$("#cliff").click(function(){
		$("#marissa_3-2").fadeOut();
		$("#marissa_4-2").show();
	})

	$("#cliffsunset").click(function(){
		$("#marissa_4-2").fadeOut();
		$("#marissa_5-2").show();
	})


//Troy path
$("#main-door-2").click(function(){ //id of map you are clicking
	$("#homepage").fadeOut(); //id of div you want to hide
	$("#troy_1").show(); //id of div you want to show
})





//Call to API to make image maps responsive
$('map').imageMapResize();