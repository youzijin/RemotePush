var user=new Object();
user.name="XiaPeng";
user.getName=function(){
	return this.name;
}
user.setName=function(name){
	this.name=name;
}
console.trace('trace');