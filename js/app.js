
// document.getElementById('heading1').addEventListener("click", makeRed);

var reded = false;

function makeRed(){
	var title = document.getElementById('heading1');
	console.log(title);
	if(reded == false){
		title.style.color = 'red';
		reded = !reded;
	} else {
		title.style.color = 'blue';
		reded = !reded;
	}
}

$('#heading1').click(makeRed);