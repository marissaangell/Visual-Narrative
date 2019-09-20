//When a paragraph element is clicked
$("p").click(function() { 
	//make whatever was clicked fade
    $(this).hide(); 
}); 

$(".fade").click(function(){
	$(this).fadeOut();
});