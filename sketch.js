//used the starter p5play code.
//used the p5play tutorial

//intial varibles. 
let player;
let food;
let gems;
let score = 0;
let counter = 0;

function setup() {
  // creates a canvas that fills the screen
  new Canvas();
  //initial varibles


//food sprite
//random code from p5play learn
food = new Group();
food.color = color(0,255,255);
food.stroke = color(0,0,0,0);
food.d = 10;
food.x = () => random(0,canvas.w);
food.y = () => random(0,canvas.h);
food.amount = 10;

//monster sprite
monster = new Sprite();
monster.x = 50;
monster.y = 50;
monster.color = color(255,0,0);
monster.stroke = color(0,0,0,0);
monster.width= 40;
monster.height = 40;
monster.overlaps(food);
monster.vel.y = 5;


//player sprite
player = new Sprite();
player.color = 'orange';
player.stroke = color(0,0,0,0);
player.width = 30;
player.height = 30;
//calls functions nom and lose
player.overlaps(food,nom);
player.overlaps(monster,lose);
}

//when the player touches food: removes food and increases the score and counter
function nom(player,food) {
  food.remove();
  score++;
  counter++;
}
//when the player touches monster: remove the player and destory the world
function lose() {
  player.remove();
  world.gravity.y = 7;
}

function draw() { 
//clear
  clear();
//sets the player and monster to a fixed rotation.
player.rotation = 0;
monster.rotation = 45;
//background color
background(color(0,0,0));

//text to display score
textSize(18);
fill(255);
text(score, 50, 50);
//counter resets at 10, counted the same as score.
if (counter === 10) {
counter = 0;


for(let i=0; i < 11; i++){
let fod = new food.Sprite();
}
}

//monster code
monster.attractTo(player, 40);
monster.direction + monster.angleTo(player);

 // Update monster position based on window boundaries //chatgpt
 if (monster.position.x < 0) {
  monster.position.x = 0;
} else if (monster.position.x > width) {
  monster.position.x = width;
}
if (monster.position.y < 0) {
  monster.position.y = 0;
} else if (monster.position.y > height) {
  monster.position.y = height;
}


//controls for the player
//horizontal movement
  if (kb.pressing('a')) player.vel.x = -5;
  else if (kb.pressing('d')) player.vel.x = 5;
  else player.vel.x = 0;
//vertical movement
  if(kb.pressing('w')) player.vel.y = -5;
  else if (kb.pressing('s')) player.vel.y = 5;
  else player.vel.y = 0;
  
  
}


