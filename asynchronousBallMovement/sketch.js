var x,y;
var drawing=[]
var reset;
function setup(){
    createCanvas(800,800);
    database=firebase.database;
   reset=createButton("clear canvas");
    reset.position(650,50);
    
  
}     

function draw(){
    background("white");
   for (var i =0;i<drawing.length;i++){
    stroke('purple'); // Change the color
    strokeWeight(5); // Make the points 10 pixels in size
    beginShape(POINTS);
    vertex(drawing[i][0],drawing[i][1]);  
    endShape();
   }
  
    drawSprites();
}
function mouseDragged () {
    var point = {
    x:mouseX,
    y:mouseY
    }
    drawing. push([mouseX,mouseY]);
}


