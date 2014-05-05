function Bullet(img, x, y) {
  this.x = x;
  this.y = y;
  this.speed = 500;
  this.movement = movements.linearForward;

  this.sprite = new Sprite({
    image: img,
    startX: 4,
    startY: 4,
    width: 10,
    height: 8,
    scale: 1.2,
    frameCount: 1
  });
};

Bullet.prototype.update = function(dt) {
  var next = this.movement(this.x, this.y, this.speed, dt);
  this.x = next.x;
  this.y = next.y;
  this.speed = next.speed;
};

Bullet.prototype.render = function(ctx) { 
  this.sprite.render(ctx, this.x, this.y);
};
