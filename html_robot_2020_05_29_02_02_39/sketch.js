
var generateBtn;
var generateBtn2;
var slider;
function setup() {
  createCanvas(600, 400);
  background(255, 192, 203);
  slider = createSlider(0, 255, 0);
  //Interface
  generateBtn = createButton('Generate Robot');
  generateBtn.mousePressed(generate);
  generateBtn2 = createButton('Generate Robot 2');
  generateBtn2.mousePressed(generate2);
}
 

function generate2(){
   background(127);
  strokeWeight(2);
  stroke(slider.value(), 0, 255);
  fill(slider.value(), 0, 255, 127);
  rect(0, 0, 720, 400);
  //ROBOT1
  stroke(3)
  fill(255,0,0)
  rect(230,150,10,40,40)
  rect(80,150,10,40,40)
  //upperarms
  stroke(3)
  fill(255,0,0)
  rect(230,180,40,10,40)
  rect(53,180,40,10,40)
  ellipse(55,185,20,20)
  ellipse(265,185,20,20)
  //lowerarm
   stroke(0)
  fill(255,0,0)
  ellipse(125,150,90,40)
  ellipse(195,150,90,40)
  //shoulders
  rect(115,300,30,10,40)
  rect(173,300,30,10,40)
  //lowerlegs
  fill(255,0,0)
  rect(125,265,20,40,40)
  rect(170,265,20,40,40)
  //upperlegs
  ellipse(135,230,60,90)
  ellipse(180,230,60,90)
  //thigh?
  fill(255,0,0)
  ellipse(135,95,90,40)
  ellipse(185,95,90,40)
  //ears
  triangle(160,20,140, 90, 180,90)
  ellipse(160,20,20,20)
  //headpeice
  fill(255,0,0)
 ellipse(160,95,120,80)
  //head
  fill(255)
  ellipse(140,90,20,20);
  ellipse(180,90,20,20);
  fill(0)
  rect(140, 88, 2, 4)
  rect(180, 88, 2, 4)
  // eyes
  fill(255,0,0);
  rect(100, 120, 120, 140);
  fill(255)
  rect(115, 135, 90, 100)
  fill(0)
  ellipse(110,250,10,10);
  ellipse(125,250,10,10);
  //body
  fill(0)
  rect(145,110,30,1) 
  //mouth
  
}


function generate(){
   background(127);
  strokeWeight(2);

  stroke(slider.value(), 0, 255);
  fill(slider.value(), 0, 255, 127);
  rect(0, 0, 720, 400);
  //ROBOT1
  stroke(3)
  fill(255,0,0)
  rect(530,150,10,40,40)
  rect(380,150,10,40,40)
  //upperarms
  stroke(3)
  fill(255,0,0)
  rect(530,180,40,10,40)
  rect(353,180,40,10,40)
  ellipse(355,185,20,20)
  ellipse(565,185,20,20)
  //lowerarm
   stroke(0)
  fill(255,0,0)
  ellipse(425,150,90,40)
  ellipse(495,150,90,40)
  //shoulders
  rect(415,300,30,10,40)
  rect(473,300,30,10,40)
  //lowerlegs
  fill(255,0,0)
  rect(425,265,20,40,40)
  rect(470,265,20,40,40)
  //upperlegs
  ellipse(435,230,60,90)
  ellipse(480,230,60,90)
  //thigh?
  fill(255,0,0)
  ellipse(435,95,90,40)
  ellipse(485,95,90,40)
  //ears
  triangle(460,20,440, 90, 480,90)
  ellipse(460,20,20,20)
  //headpeice
  fill(255,0,0)
 ellipse(460,95,120,80)
  //head
  fill(255)
  ellipse(440,90,20,20);
  ellipse(480,90,20,20);
  fill(0)
  rect(440, 88, 2, 4)
  rect(480, 88, 2, 4)
  // eyes
  fill(255,0,0);
  rect(400, 120, 120, 140);
  fill(255)
  rect(415, 135, 90, 100)
  fill(0)
  ellipse(410,250,10,10);
  ellipse(425,250,10,10);
  //body
  fill(0)
  rect(445,110,30,1) 
  //mouth 
}