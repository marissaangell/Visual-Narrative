$("audio").mouseleave(function(){
	$(this).addClass("hidden");
})

//Marissa path
$("#main-door-4").click(function(){ //id of map you are clicking
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

	$("#beachdoor1").click(function(){
		$("#marissa_5-2").fadeOut();
		$("#marissa_6-2").show();
	})

	$("#beachdoor2").click(function(){
		$("#marissa_6-2").fadeOut();
		$("#marissa_7-2").show();
	})

	$("#beachdoor3").click(function(){
		$("#marissa_7-2").fadeOut();
		$("#marissa_8-2").show();
	})

	$("#beachdoor4").click(function(){
		$("#marissa_8-2").fadeOut();
		$("#marissa_9-2").show();
	})

	$("#desertdoor").click(function(){
		$("#marissa_9-2").fadeOut();
		
		setTimeout(function(){
	  		$("#homepage").show();
		}, 1500);
	})


//Troy path
$("#main-door-2").click(function(){ 
	$("#homepage").fadeOut(); 
	$("#troy_1").show(); 
})

$("#FirstHallwayDoor").click(function(){ 
	$("#troy_1").fadeOut(); 
	$("#troy_1_2").show(); 
})

$("#FirstHallwayLight").click(function(){ 
	$("#troy_1").fadeOut(); 
	$("#troy_2").show(); 
})

$("#FirstRoom").click(function(){ 
	$("#troy_1_2").fadeOut(); 
	$("#troy_2").show(); 
})

$("#SecondHallwayLeftDoor").click(function(){ 
	$("#troy_2").fadeOut(); 
	$("#troy_2_2").show(); 
})

$("#SecondHallwayRightDoor").click(function(){ 
	$("#troy_2").fadeOut(); 
	$("#troy_2_2").show(); 
})

$("#SecondHallwayLight").click(function(){ 
	$("#troy_2").fadeOut(); 
	$("#troy_3").show(); 
})

$("#SecondRoomDoor").click(function(){ 
	$("#troy_2_2").fadeOut(); 
	$("#troy_3").show(); 
})

$("#ThirdHallwayDoor").click(function(){ 
	$("#troy_3").fadeOut(); 
	$("#troy_3_2").show(); 
})

$("#ThirdHallwayLight").click(function(){ 
	$("#troy_3").fadeOut(); 
	$("#troy_4").show(); 
})

$("#ThirdRoomDoor").click(function(){ 
	$("#troy_3_2").fadeOut(); 
	$("#troy_3_3").show(); 
})

$("#FourthRoomDoor").click(function(){ 
	$("#troy_3_3").fadeOut(); 
	$("#troy_4").show(); 
})

$("#FourthHallwayLight").click(function(){ 
	$("#troy_4").fadeOut(); 
	$("#troy_5").show(); 
})

$("#FinalDoorLight").click(function(){ 
	$("#troy_5").fadeOut(); 
	$("#troy_6").show(); 
})

$("#Chair").click(function(){ 
	$("#troy_6").fadeOut(); 
	
	setTimeout(function(){
	  	$("#homepage").show();
	}, 1500);
})



//Tyler path

$("#main-door-3").click(function(){ 
	$("#homepage").fadeOut(); 
	$("#tyler_1").show(); 
})

$("#grass_door").click(function(){ 
	$("#tyler_1").fadeOut(); 
	$("#tyler_2").show(); 
})

$("#flower").click(function(){ 
	$("#tyler_2").fadeOut(); 
	$("#tyler_3").show(); 
})

$("#grassydoorway").click(function(){ 
	$("#tyler_3").fadeOut(); 
	$("#tyler_4").show(); 
})

$("#darkhallway").click(function(){ 
	$("#tyler_4").fadeOut(); 
	$("#tyler_5").show(); 
})

$("#city").click(function(){ 
	$("#tyler_5").fadeOut(); 
	$("#tyler_6").show(); 
})

$("#city_crowd").click(function(){ 
	$("#tyler_6").fadeOut(); 
	$("#tyler_7").show(); 
})

$("#motorcycle").click(function(){ 
	$("#tyler_7").fadeOut(); 
	$("#tyler_8").show(); 
})

$("#cityscape").click(function(){ 
	$("#tyler_8").fadeOut(); 
	$("#tyler_9").show(); 
})

$("#overgrown_city").click(function(){ 
	$("#tyler_9").fadeOut(); 
	$("#tyler_10").show(); 
})

$("#overgrown").click(function(){ 
	$("#tyler_10").fadeOut(); 
	$("#tyler_11").show(); 
})

$("#wood_room").click(function(){ 
	$("#tyler_11").fadeOut(); 
	$("#tyler_12").show(); 
})

$("#paradox").click(function(){ 
	$("#tyler_12").fadeOut(); 
	
	setTimeout(function(){
	  	$("#homepage").show();
	}, 1500);
})



//Rachel path
$("#main-door-1").click(function(){ 
	$("#homepage").fadeOut(); 
	$("#rachel_1").show(); 
})

$("#mind").click(function(){ 
	$("#rachel_1").fadeOut(); 
	$("#rachel_2").show(); 
})

$("#bridge").click(function(){ 
	$("#rachel_2").fadeOut(); 
	$("#rachel_3").show(); 
})

$("#house").click(function(){ 
	$("#rachel_3").fadeOut(); 
	$("#rachel_4").show(); 
})

$("#island").click(function(){ 
	$("#rachel_4").fadeOut(); 
	$("#rachel_5").show(); 
})

$("#waffles").click(function(){ 
	$("#rachel_5").fadeOut(); 
	$("#rachel_6").show(); 
})

$("#tacos").click(function(){ 
	$("#rachel_6").fadeOut(); 
	$("#rachel_7").show(); 
})

$("#earth").click(function(){ 
	$("#rachel_7").fadeOut();

	setTimeout(function(){
	  	$("#homepage").show();
	}, 1500);
})



//Call to API to make image maps responsive
$('map').imageMapResize();