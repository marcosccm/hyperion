function Cannon() {
  this.magazine = [];
  this.lastShot = Date.now();
  this.cooled = true;
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
  if(this.cooled) {
    var bullet = new Bullet();
    this.magazine.push(bullet);
    this.cooldown();
    return bullet;
  }
};

Cannon.prototype.cooldown = function() {
  this.cooled = false;
  setTimeout(function() { this.cooled = true }, 100);
}

function Bullet() {};

Bullet.prototype.update = function() { };

Bullet.prototype.render = function() { };
