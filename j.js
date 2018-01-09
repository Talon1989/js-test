$(()=>{
	if($("#title").text()=="This is the title")alert("Loaded");

	$("#success").hide();	
	$("#startover").addClass('hoverOut');
	let num=0;
	$("#ape").click(()=>{
		$("#score").text(++num);
		$("#success").show("normal").fadeOut(800); // show, fadeOut 
		$("#startover").hover(
			()=>{ $("#score").text(num=0);$("#startover").removeClass("hoverOut").addClass("hoverIn");},  // in
			()=>{$("#startover").removeClass("hoverIn").addClass("hoverOut")} // hover event out
		);
	});
	
	
	
});
let arr = [1,2,6,9,8,45,6,33];
console.log(arr.map((a)=>a*2));
