class Divisions {

    constructor(x,y,w,h){
    var options = {


        isStatic: true

    }

    this.body = bodies.rectangle(x,y,w,h,options);

    this.w = w;
    this.h= h;
    world.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode = (CENTER);
        fill = ("white");
        rect(pos.xx,pos.y,this.w,this.h);
    }
};