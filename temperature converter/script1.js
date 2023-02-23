var cel=document.getElementById("cel");
var fah=document.getElementById("fah");
cel.addEventListener("input",function () {
	
	let c=this.value;
	let f =(9/5 * c) + 32;
	fah.value = f;
});
fah.addEventListener("input",function () {
	console.log("changed");
	let f=this.value;
	let c= (f - 32) / 1.8;
	cel.value = c;
});