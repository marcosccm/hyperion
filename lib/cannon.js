function Cannon() {
  this.magazine = [];
  this.lastShot = Date.now();
  this.cooldown = 100;
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

Cannon.prototype.shoot = function() {
  if(Date.now() - this.lastShot > this.cooldown) {
    var bullet = new Bullet();
    this.magazine.push(bullet);
    this.lastShot = Date.now();
    return bullet;
  }
};

function Bullet() {};

Bullet.prototype.update = function() { };

Bullet.prototype.render = function() { };
