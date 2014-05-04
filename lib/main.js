var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 600;
document.body.appendChild(canvas);


function loadImage(src) {
  var image = new Image();
  var def = new RSVP.defer();
  image.src = src;
  image.onload = function() { def.resolve(image) };
  return def.promise;
}

var images = {
  background: loadImage("starfield.png"),
  ship: loadImage("ship.png"),
  bullets: loadImage("bullets.png"),
}
RSVP.hash(images).then(function(images) { init(images); });

var world = { };

function init(images)  {
  world.bg = ctx.createPattern(images.background, 'repeat');

  world.player = {
    x: 0,
    y: 0,
    sprite: new Sprite({
      image: images.ship,
      width: 80,
      height: 29,
      scale: 1,
      frameCount: 4
    })
  }

  world.cannon = new Cannon(images.bullets); 

  main(Date.now());
}

function render() {
  ctx.fillStyle = world.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  world.cannon.render(ctx);
  world.player.sprite.render(ctx, world.player.x, world.player.y);
}

kd["UP"].down(function () {
  world.player.y -= 4;
});

kd["DOWN"].down(function () {
  world.player.y += 4;
});

kd["LEFT"].down(function () {
  world.player.x -= 4;
});

kd["RIGHT"].down(function () {
  world.player.x += 4;
});

kd["SPACE"].down(function () {
  world.cannon.shoot(
    world.player.x + (world.player.sprite.width/2),
    world.player.y + (world.player.sprite.height/2) - 3
  );
});
function update(dt) {
  kd.tick();
  world.cannon.update(dt);
  world.player.sprite.update(dt);
}

function main(previous) {
  var now = Date.now();
  var dt  = (now - previous) / 1000;
  update(dt);
  render();
  requestAnimationFrame(function() { main(now); });
}

