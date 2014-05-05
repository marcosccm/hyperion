var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight - 2;
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

  world.player = new Player({
    x: 20,
    y: canvas.height/2,
    speed: 300,
    image: images.ship,
    cannon: new Cannon(images.bullets)
  });

  main(Date.now());
}

function render() {
  ctx.fillStyle = world.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  world.player.render(ctx);
}

function update(dt) {
  kd.tick();
  world.player.update(dt);
}

function main(previous) {
  var now = Date.now();
  var dt  = (now - previous) / 1000;
  update(dt);
  render();
  requestAnimationFrame(function() { main(now); });
}

kd["UP"].down(function () {
  world.player.up(0.01);
});

kd["DOWN"].down(function () {
  world.player.down(0.01);
});

kd["LEFT"].down(function () {
  world.player.left(0.01);
});

kd["RIGHT"].down(function () {
  world.player.right(0.01);
});

kd["SPACE"].down(function () {
  world.player.shoot();
});
