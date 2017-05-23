var fortunes = ["Rich Person","Professional Rock Breeder","Professional Triangle Player","Tech Support Worker","Bad YouTuber","Superman Sidekick","Garbage Man/Woman","Shop Owner","Amazing Artist","Botanist","Farmer","Stalker","Runaway Turtle",
"Dog Food Tester","Cat Litter Smell Tester","Fortune Teller","Scammer","Singer","Professional Computer Smasher","Dentist","Doctor","Neuro Surgeon", "Baker"," Overweight Lawyer","Street Cleaner","Dog Walker","Mail Carrier","Taxi Driver","Corrections Officer","Shoplifter","Janitor","Unemployed","Goo-Wizard","Bank Robber","Firefighter","Rock Themed Vigilante","Rabbi","Peaceful and Friendly Turtle","Policeman"]
var counter = 0;
var rightFortunes = ["Rich Person","Buisness Man","Bank Robber","Dentist","Scammer","Doctor"];
var counter = 0;
var leftFortunes = ["MLG Gamer","Bad YouTuber","Astronaut","Shop Owner", "Gifted Artist", "Baker", "Policeman", "Firefighter"]
var counter = 0;
var upFortunes = ["Rich Person (Inheritance)","Train Driver","Bus Driver","Taxi Driver","Shop Owner","Basement Gamer","Factory Worker","Bad Startup Buisness Owner"]
var counter = 0;
var downFortunes = ["Homeless","Unemployed","Unemployed","Housemaid","Proffesional Rock Breeder","Triangle player","Janitor","Street Cleaner","Unemployed","Unemployed","Unemployed","Homeless"]
var message = "Career Test",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,y;
var b = 0;

function preload() {
 font = loadFont('assets/BebasNeue.otf');
 image1 = loadImage ('assets/153-149-845x684.jpg');
 mySound = loadSound('assets/Aftermath.mp3');
 
}
function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(60);
 textSize(50)
  textFont(font);
  textSize(fontsize);
  tt = (0)
  we = (255)
  b = random(1,255)
 background(tt,we,(b))
 mySound.setVolume(0.1);
  mySound.play();
  //text("Click to Start",windowWidth/3, windowHeight/5)
  image(image1,windowWidth/16,windowHeight/16,400,450)
  console.log(windowWidth)
  console.log(windowHeight)
  text("Do You Want a Job?",windowWidth/3-300, windowHeight/2+120)
  text("Press Y for Yes N for No",windowWidth/3-300, windowHeight/2+200)
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 12 - bounds.h / 2;
}

function draw() {

 fill(0);
 //text("Prediction -->",windowWidth/3-300, windowHeight/2+100)
 //text("Career Test",windowWidth/3, windowHeight/16)
rect(windowWidth/3, windowHeight/2+100)
 //if(counter>=34){
  //counter = 0;
  //mySound.play();
 //}
 //counter += 1;
 noStroke()
 
  fill(tt,we,b)
  rect(x-10, y-60, 300, 159);
 fill(0);
  text(message, x, y+23);
  bounds = font.textBounds(message,x,y,fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 5);
    y += random(-5, 5);
   //background(0,255,(random(1,255)))
  }
}


function keyPressed() {
 b = random(1,255)
  if (keyCode === 89) {
   b = random(1,255);
   background(tt,we,b)
    text ("Is money more important than liking your job? ",windowWidth/64, windowHeight/2)
    text ("Right arrow for yes Left for no", windowWidth/65, windowHeight/2+200);
  } else if (keyCode === 78) {
   background(tt,we,(b))
    text ("If you were to get a job, would you work hard? ",windowWidth/64, windowHeight/2)
    text ("Up arrow for yes down for no", windowWidth/64, windowHeight/2+200)
  } else if (keyCode === RIGHT_ARROW) {
   background(tt,we,(b))
   text(rightFortunes[floor(random(rightFortunes.length))],windowWidth/3, windowHeight/2+100)
  } else if (keyCode === LEFT_ARROW){
   background(tt,we,b)
   text(leftFortunes[floor(random(leftFortunes.length))],windowWidth/3, windowHeight/2+100)
  } else if (keyCode === UP_ARROW){
   background(0,255,b)
   text(upFortunes[floor(random(upFortunes.length))],windowWidth/3, windowHeight/2+100)
  } else if (keyCode === DOWN_ARROW){
   background(tt,we,b)
   text(downFortunes[floor(random(downFortunes.length))],windowWidth/3, windowHeight/2+100)
  }
  // instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  

  // write the text in black and get its bounding box
  
}









//function mousePressed() {
 //background(0,255,(random(1,255)));
 //fill(0);
 //text("Prediction -->",windowWidth/3-300, windowHeight/2+100)
 //text("Career Prediction",windowWidth/3, windowHeight/3)
//rect(windowWidth/3, windowHeight/2+100)
// text("Prediction -->",windowWidth/3-300, windowHeight/2+100)
// text("Career Prediction",windowWidth/3, windowHeight/3)
// fill (random(1,255),random(1,255),random(1,255));
 // text(fortunes[floor(random(fortunes.length))],windowWidth/3, windowHeight/2+100)
//}