class Ground {

constructor(x,y,w,h){
var options = {isStatic : true};
this.body = Bodies.rectangle(x,y,w,h,options);
this.w = w
this.h = h
World.add(world,this.body)
}
display(){
push();
var groundPos = this.body.position;
translate(groundPos.x , groundPos.y)
rectMode(CENTER)
rect(0,0,this.w,this.h)
pop();

}




}



