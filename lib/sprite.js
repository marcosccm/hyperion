function Sprite(args) {
  args = _.extend({
    startX: 0,
    startY: 0,
    scale: 1,
    direction: 'horizontal',
    frameCount: 1,
    frameRate: 30
  }, args);

  this.image = args.image;
  this.width = args.width;
  this.height  = args.height;
  this.startX  = args.startX;
  this.scale  = args.scale;
  this.startX  = args.startX;
  this.startY  = args.startY;
  this.frameCount  = args.frameCount;
  this.currentFrame = 0;
  this.frameRate = args.frameRate;
};

Sprite.prototype.update = function(dt) {
  this.currentFrame += this.frameRate * dt;
  if(this.currentFrame > this.frameCount) {
    this.currentFrame = 0;
  }
}

Sprite.prototype.render = function(ctx, x, y) {
  var startX = this.startX + 0;
  var startY = this.startY + (this.height * Math.floor(this.currentFrame));
  var scaledWidth  = this.width  * this.scale;
  var scaledHeight = this.height * this.scale;

  ctx.drawImage(this.image,
              startX, startY,
              this.width, this.height,
              x, y,
              scaledWidth, scaledHeight);
}
