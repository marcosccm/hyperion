var randomizer = function(max) { return function() { return _.random(0, max); } }

function Enemies(args) {
  args = _.extend({
    randomizer: randomizer(args.yBoundary)
  }, args);

  this.xBoundary = args.xBoundary;
  this.yBoundary = args.yBoundary;
  this.randomizer = args.randomizer;
  this.image = args.image;
  this.inner = [];
};

Enemies.prototype.spawn = function() {
  var enemy = new Enemy({
    x: this.xBoundary,
    y: this.randomizer(),
    image: this.image
  });

  this.inner.push(enemy);
  return enemy;
}

Enemies.prototype.update = function(dt) {
  this.inner.forEach(function(enemy) { enemy.update(dt) });
};

Enemies.prototype.render = function(ctx) {
  this.inner.forEach(function(enemy) { enemy.render(ctx) });
};

function Enemy(args) {
  this.x = args.x;
  this.y = args.y;
  this.speed = 400;
  this.sprite = new Sprite({
    image: args.image,
    width: 39,
    height: 30,
    scale: 1,
    frameCount: 5,
    frameRate: 15
  });
}

Enemy.prototype.update = function(dt) {
  this.x -= this.speed * dt;
  this.sprite.update(dt);
};

Enemy.prototype.render = function(ctx) {
  this.sprite.render(ctx, this.x, this.y);
};
