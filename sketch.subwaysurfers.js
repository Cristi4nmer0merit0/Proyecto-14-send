var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImage=loadImage("path2.png");
  //loadAnimation de boy (niño)
  boy.loadAnimation("boy1.png","boy3.png","boy4.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path=createSprite(385,300,80,70);
//agregar imagen de path
path.addImage("path",pathImage);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY=-10;
path.scale=1.2;

//crear sprite de boy (niño)
boy=createSprite(100,200,30,50);

//agregar animación para boy
boy.addAnimation("running",boy_running);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible=false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(invisibleleftBoundary,invisiblerightBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
