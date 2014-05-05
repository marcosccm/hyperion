function Cannon(bulletImage) {
  this.magazine = [];
  this.lastShot = Date.now();
  this.cooled = true;
  this.bulletImage = bulletImage;
};

Cannon.prototype.update = function(dt) {
  this.magazine.forEach(function(bullet) {
    bullet.update(dt);
  });
};

Cannon.prototype.render = function(ctx) {
  this.magazine.forEach(function(bullet) {
    bullet.render(ctx);
  });
};

Cannon.prototype.shoot = function(x,y) {
  if(this.cooled) {
    var bullet = new Bullet(this.bulletImage, x, y);
    this.magazine.push(bullet);
    this.cooldown();
    return bullet;
  }
};

Cannon.prototype.cooldown = function() {
  var that = this;
  this.cooled = false;
  setTimeout(function() { that.cooled = true }, 100);
}

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
