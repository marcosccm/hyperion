function Player(args) {
  this.x = args.x;
  this.y = args.y;
  this.speed = args.speed;
  this.cannon = args.cannon;

  this.sprite = new Sprite({
    image: args.image, 
    width: 80,
    height: 29,
    scale: 1,
    frameCount: 4
  }); 
}

Player.prototype = Drawable();

Player.prototype.up = function(dt) {
  this.y -= this.speed * dt
};

Player.prototype.down = function(dt) {
  this.y += this.speed * dt
}

Player.prototype.left = function(dt) {
  this.x -= this.speed * dt
}

Player.prototype.right = function(dt) {
  this.x += this.speed * dt
}

Player.prototype.shoot = function() {
  var cannonX = this.x + (this.sprite.width/2);
  var cannonY = this.y + (this.sprite.height/2) - 3;

  this.cannon.shoot(cannonX, cannonY);
}

Player.prototype.render = function(ctx) {
  this.cannon.render(ctx);
  this.sprite.render(ctx, this.x, this.y);
};

Player.prototype.update = function(dt) {
  this.sprite.update(dt);
  this.cannon.update(dt);
};
