$("audio").mouseleave(function(){
	$(this).addClass("hidden");
})

//Marissa path
$("#main-door-1").click(function(){ //id of map you are clicking
	$("#homepage").fadeOut(); //id of div you want to hide
	$("#marissa_audio").show(); //id of div you want to show
	$("#audio-marissa").removeClass("hidden"); 
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

	$("#garden_stairs").click(function(){ 
		$("#marissa_4-1").fadeOut();
		$("#marissa_5-1").show();
	})

	$("#jungle_door").click(function(){ 
		$("#marissa_5-1").hide();
		$("#marissa_6-1").show();

		setTimeout(function(){
		  	$("#marissa_6-1").fadeOut();
			$("#marissa_7-1").show();
		}, 1000);
	})

	$("#hospital_hall").click(function(){ 
		$("#marissa_7-1").fadeOut();

		setTimeout(function(){
		  	$("#homepage").show();
		}, 1500);
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

$("#FirstHallwayDoor").click(function(){ //id of map you are clicking
	$("#troy_1").fadeOut(); //id of div you want to hide
	$("#troy_1_2").show(); //id of div you want to show
})

$("#FirstHallwayLight").click(function(){ //id of map you are clicking
	$("#troy_1").fadeOut(); //id of div you want to hide
	$("#troy_2").show(); //id of div you want to show
})

$("#FirstRoom").click(function(){ //id of map you are clicking
	$("#troy_1_2").fadeOut(); //id of div you want to hide
	$("#troy_2").show(); //id of div you want to show
})

$("#SecondHallwayLeftDoor").click(function(){ //id of map you are clicking
	$("#troy_2").fadeOut(); //id of div you want to hide
	$("#troy_2_2").show(); //id of div you want to show
})

$("#SecondHallwayRightDoor").click(function(){ //id of map you are clicking
	$("#troy_2").fadeOut(); //id of div you want to hide
	$("#troy_2_2").show(); //id of div you want to show
})

$("#SecondHallwayLight").click(function(){ //id of map you are clicking
	$("#troy_2").fadeOut(); //id of div you want to hide
	$("#troy_3").show(); //id of div you want to show
})

$("#SecondRoomDoor").click(function(){ //id of map you are clicking
	$("#troy_2_2").fadeOut(); //id of div you want to hide
	$("#troy_3").show(); //id of div you want to show
})

$("#ThirdHallwayDoor").click(function(){ //id of map you are clicking
	$("#troy_3").fadeOut(); //id of div you want to hide
	$("#troy_3_2").show(); //id of div you want to show
})

$("#ThirdHallwayLight").click(function(){ //id of map you are clicking
	$("#troy_3").fadeOut(); //id of div you want to hide
	$("#troy_4").show(); //id of div you want to show
})

$("#ThirdRoomDoor").click(function(){ //id of map you are clicking
	$("#troy_3_2").fadeOut(); //id of div you want to hide
	$("#troy_3_3").show(); //id of div you want to show
})

$("#FourthRoomDoor").click(function(){ //id of map you are clicking
	$("#troy_3_3").fadeOut(); //id of div you want to hide
	$("#troy_4").show(); //id of div you want to show
})

$("#FourthHallwayLight").click(function(){ //id of map you are clicking
	$("#troy_4").fadeOut(); //id of div you want to hide
	$("#troy_5").show(); //id of div you want to show
})

$("#FinalDoorLight").click(function(){ //id of map you are clicking
	$("#troy_5").fadeOut(); //id of div you want to hide
	$("#troy_6").show(); //id of div you want to show
})

$("#Chair").click(function(){ //id of map you are clicking
	$("#troy_6").fadeOut(); //id of div you want to hide
	$("#homepage").show(); //id of div you want to show
})


//Call to API to make image maps responsive
$('map').imageMapResize();