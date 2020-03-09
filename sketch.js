var sun, sunimg, mercury, mercuryimg, venus, venusimg, earth, eartimg, mars, marsimg, jupiter, jupiterimg;
function preload()
{
  sunimg = loadImage("sun.png");
  mercuryimg = loadImage("mercury.png");
  venusimg = loadImage("venus.png");
  earthimg = loadImage("earth.png");
  marsimg = loadImage("mars.png");
  jupiterimg = loadImage("jupiter.png");
}
function setup() 
{
  createCanvas(800,400);
  sun = createSprite(400, 200, 50, 50);
  sun.addImage(sunimg);
  sun.scale = 0.5;
  sun.setCollider("circle",0,0,95);
  sun.debug = true;
  mercury = createSprite(500, 190, 50, 50);
  mercury.addImage(mercuryimg);
  mercury.scale = 0.02;
  mercury.setCollider("circle",0,0,800);
  mercury.debug = true;
  venus = createSprite(575, 210, 50, 50);
  venus.addImage(venusimg);
  venus.scale = 0.03;
  venus.setCollider("circle",0,0,800);
  venus.debug = true;
  earth = createSprite(650, 260, 50, 50);
  earth.addImage(earthimg);
  earth.scale = 0.03;
  earth.setCollider("circle",0,0,815);
  earth.debug = true;
  mars = createSprite(710, 300, 50, 50);
  mars.addImage(marsimg);
  mars.scale = 0.05;
  mars.setCollider("circle",0,0,315);
  mars.debug = true;
  jupiter = createSprite(750, 375, 50, 50);
  jupiter.addImage(jupiterimg);
  jupiter.scale = 0.05;
  jupiter.setCollider("circle",0,0,650);
  jupiter.debug = true;
}

function draw() 
{
  background(0);  
  //destroy1();
 
    sun.scale = sun.scale + 0.002;

 if(sun.collide(mercury))
  {
    mercury.destroy();
  }
  if(sun.collide(venus))
  {
    venus.destroy();
  }
  if(sun.collide(earth))
  {
    earth.destroy();
  }
  if(sun.collide(mars))
  {
    mars.destroy();
  }
  if(sun.collide(jupiter))
  {
    jupiter.destroy();
  }
  drawSprites();
}