function preload(){
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfyF0xefWMnAZIYI52MkJmhwh1WRsDT66giZNuZg8sg&s');
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img,0,0,width,height);
  fill(0,0,0);
  stroke(250,250,250);
  strokeWeight(10)
  circle(200,200,50);
}