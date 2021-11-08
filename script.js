const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

for(item of btn){
	item.addEventListener("click", (e)=>{
		btntext = e.target.innerText;
		if (btntext =='x'){
			btntext = '*';
		}
		screen.value += btntext;
	})
}

function sin(){
	screen.value = Math.sin(screen.value);
}
function cos(){
	screen.value = Math.cos(screen.value);
}
function tan(){
	screen.value = Math.tan(screen.value);
}
function pow(){
	screen.value = Math.pow(screen.value, 2);
}
function sqrt(){
	screen.value = Math.sqrt(screen.value, 2);
}
function log(){
	screen.value = Math.log(screen.value);
}
function pi(){
	screen.value = 3.14159265359;
}
function e(){
	screen.value = 2.71828182846;
}
function fact(){
	num = screen.value
	for(var factorial = 1; num>1; num--){
		factorial *= num;
	}
	screen.value=factorial;

}

function squar(){
	screen.value = screen.value*screen.value
	screen.value;
}

function bksp(){
	screen.value = screen.value.substr(0, screen.value.length-1);
}
function clr(){
	screen.value = '';
}