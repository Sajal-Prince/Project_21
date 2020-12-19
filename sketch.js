var bullet , wall ;
var speed , weight , thickness ;

function setup() 
{
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  thickness = Math.round(random(22,83));
  weight = Math.round(random(30,52));

  bullet = createSprite(50, 200, 30, 10 );
  bullet.shapeColor = "White" ;
  bullet.velocityX = speed;
  
  wall = createSprite(1300,200,thickness, height/2);

  console.log(speed);
  console.log(thickness);
  console.log(weight);
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness * thickness * thickness);

    if(damage >10)
    {
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function hasCollided(lbullet , lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x ;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}