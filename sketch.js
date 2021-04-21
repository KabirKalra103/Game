var pc,ememy,sniperRifle,knife,AssaultRifle,area1,AssaultRifleAmmo,backgroundImage;
function prelaod(){
pc=loadImage("Pictures/Pc.png");
enemy=loadImage("Pictures/Enemy.png")
knife=loadImage("Pictures/Knife.png")
AssaultRifle=loadImage("Pictures/Assault rifle.png")
area1=loadImage("p5.play-boilerplate-master/Pictures/Area1.png")
AssaultRifleAmmo=loadImage("Pictures/Ammo 1.png")
sniperRifle=loadImage("Pictures/Sniper rifle.png")
}

function setup()   {
    createCanvas(800,800)
    
}


function draw(){
   background(area1);
    drawSprites();
}