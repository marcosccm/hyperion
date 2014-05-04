function Sprite(args) {
  args = _.extend({
    startX: 0,
    startY: 0,
    ratio: 1,
    direction: 'horizontal',
    frameCount: 1
  }, args);

  this.x = args.x;
  this.y = args.y;
  this.image = args.image;
  this.width = args.width;
  this.height  = args.height;
  this.startX  = args.startX;
  this.scale  = args.scale;
  this.startX  = args.startX;
  this.startY  = args.startY;
  this.frameCount  = args.frameCount;
  this.currentFrame = 0;
  this.speed = 20;
};

Sprite.prototype.update = function(dt) {
  this.currentFrame += this.speed * dt;
  if(this.currentFrame > this.frameCount) {
    this.currentFrame = 0;
  }
}

Sprite.prototype.render = function(ctx) {
  var startX = this.startX + 0;
  var startY = this.startY + (this.height * Math.floor(this.currentFrame));
  var scaledWidth  = this.width  * this.scale;
  var scaledHeight = this.height * this.scale;

  ctx.drawImage(this.image,
              startX, startY,
              this.width, this.height,
              this.x, this.y,
              scaledWidth, scaledHeight);
}
