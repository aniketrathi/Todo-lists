function fun(list,date,priority) {
	this.list=list;
	this.date=date;
	this.priority=priority;	
}

class projects{
	constructor(name){
		this.name=name;
		this.pro=[];
	}

}

var active_project = 0;

var arr=[];

var project1= new projects('ABC');
arr.push(project1);
var list1= new fun('coding','20/10/20',1);
project1.pro.push(list1);

function display(name) {
	var txt="<tr><td class='project_name'><div class='btn btn-primary input' onclick='clickonprojects(event)'>"+name+"</div></td><td class='project_button'><div class='btn btn-primary' id='input'><i class='fas fa-trash-alt' onclick='del_project(event)'></i></div></td></tr>";
	document.getElementById('nm').innerHTML+=txt;
}
function add_project() {
	var txt;
	txt=document.getElementById('projs').value;
	if(txt==="")
		alert("Fill the deatils completely");
	else{
		var x = new projects(txt);
		display(x.name);
		arr.push(x);
		document.getElementById('projs').value="";
	}
}

for(var i=0;i<arr.length;i++){
	display(arr[i].name);
}

function clickonprojects(event) {
	document.getElementById('inf').innerHTML = "";
	var node=event.target;
	var txt=node.textContent;
	for(var i=0;i<arr.length;i++){
		if(arr[i].name===txt){
			active_project = i;
			break;
		}
	}
	display_list(i);
}
function add_list() {
	var list_name=document.getElementById('lists').value;
	var date=document.getElementById('date').value;
	var priority=document.getElementById('priority').value;
	if(list_name==="" || date==="" || priority===""){
		alert("Fill up the details completely");
	}
	else{
		var msg="<tr><td>"+list_name+"</td><td>"+date+"</td><td>"+priority+"</td><td><div class='btn btn-primary' onclick='del_lists(event)'><i class='fas fa-trash-alt'></i></div></td></tr>";
		document.getElementById('inf').innerHTML+=msg;
		var x = new fun(list_name,date,priority); 
		arr[active_project].pro.push(x);
		document.getElementById('lists').value="";
		document.getElementById('date').value="";
		document.getElementById('priority').value="";
	}
}
function display_list(i) {
	var x=arr[i].pro;
	for(var j=0;j<x.length;j++){
		var msg="<tr><td>"+x[j].list+"</td><td>"+x[j].date+"</td><td>"+x[j].priority+"</td><td><div class='btn btn-primary'><i class='fas fa-trash-alt' onclick='del_lists(event)'></i></div></td></tr>";
		document.getElementById('inf').innerHTML+=msg;
	}
}
function del_project(event) {
	var node = event.target.parentElement;
	var txt = node.parentElement.parentElement.childNodes[0].childNodes[0].textContent;
	for(var i=0;i<arr.length;i++){
		if(arr[i].name === txt){
			arr.splice(i);
			break;
		}
	}
	node.parentElement.parentElement.remove();
	document.getElementById('inf').innerHTML="";
	console.log(arr);
}
function del_lists(event) {
	var node=event.target.parentElement;
	var x= node.parentElement.parentElement.childNodes[0].textContent;
	var y= arr[active_project].pro;
	for(var j=0;j<y.length;j++){
		if(y[j].list===x){
			y.splice(j);
			break;
		}
	}
	node.parentElement.parentElement.remove();
}