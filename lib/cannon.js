function Cannon(bulletImage, range) {
  this.magazine = [];
  this.lastShot = Date.now();
  this.cooled = true;
  this.bulletImage = bulletImage;
  this.range = range;
};

Cannon.prototype.update = function(dt) {
  this.magazine.forEach(function(bullet) {
    bullet.update(dt);
  });

  this.magazine = _.filter(this.magazine, function(bullet) {
    return bullet.x <= this.range;
  }, this);
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

