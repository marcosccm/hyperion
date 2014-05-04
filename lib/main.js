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

  world.player = new Sprite({ 
    image: images.ship,
    x: 0,
    y: 1,
    width: 80,
    height: 29,
    scale: 1,
    frameCount: 4
  });

  world.bullet = new Sprite({ 
    image: images.bullets,
    startX: 4,
    startY: 4,
    x: 50,
    y: 50,
    width: 10,
    height: 8,
    scale: 1.2,
    frameCount: 1
  });

  main(Date.now());
}

function render() {
  ctx.fillStyle = world.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  world.player.render(ctx);
  world.bullet.render(ctx);
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
function update(dt) {
  kd.tick();
  world.bullet.x += 300 * dt;
  world.player.update(dt);
}

function main(previous) {
  var now = Date.now();
  var dt  = (now - previous) / 1000;
  update(dt);
  render();
  requestAnimationFrame(function() { main(now); });
}

