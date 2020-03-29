function add(elemnt){
	console.log(elemnt.outerHTML);
	console.log(elemnt.parentElement);
	console.log(elemnt.parentNode.parentNode.parentNode.parentNode);
	var new_elemnt = document.createElement("div");
	new_elemnt.style.margin="2px";
	new_elemnt.style.marginLeft="2%";
	new_elemnt.innerHTML = '<div><table><tr><td><input value="decision"></input></td><td><select id="options"><option value="screen">Screen</option><option value="function">Function</option><option value="decision">Decision</option></select></td><td><input value=" Start"/></td><td><button onclick="add(this)">Add</button></td><td></td></tr></table></div>';
	elemnt.parentNode.parentNode.appendChild(new_elemnt);
    //elemnt.parentElement.childNodes[4].innerHTML='</div><input value=" Start"/><button onclick="add(this)">Add</button><div></div><div>';
}
function onchangeofmodeler(elemnt){
//console.log(elemnt.parentNode);
//console.log(elemnt.parentNode.parentNode);
//console.log(elemnt.parentNode.parentNode.childNodes);
console.log(elemnt.parentNode.parentNode.getElementsByTagName("div"));
//elemnt.parentNode.parentNode.getElementsByTagName("div").forEach(myFunction);

}
/*
function myFunction(elemnt){
	if(elemnt.innerHTML=="output"){
		elemnt.innerHTML = "<input value="decision"/>";
	}
}
*/