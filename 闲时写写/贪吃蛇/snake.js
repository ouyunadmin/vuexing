(function (w) {
  // 创建蛇
  function snake(options) {
    options = options || {}
    this.width = options.width || 20
    this.height = options.height || 20
    this.headColor = options.headColor || "red"
    this.bodyColor = options.bodyColor || "green"
    // 往右移动
    this.direction = "right";
    // 定 蛇头与蛇身
    Snake.prototype.render = function (target) {
      for (var i = 0; i < this.body.length; i++) {
        //1. 创建span
        var span = document.createElement("span");
        //2. 设置span的样式
        //2.1 宽度和高度
        span.style.width = this.width + "px";
        span.style.height = this.height + "px";
        //2.2 颜色
        span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;
        //2.3 位置
        span.style.position = "absolute";
        span.style.left = this.body[i].x * this.width + "px";
        span.style.top = this.body[i].y * this.height + "px";
        //3. 把span添加target中
        target.appendChild(span);
      }
    }
  }

  // function Snake(options) {
  //   options = options || {};
  //   this.width = options.width || 20;
  //   this.height = options.height || 20;
  //   this.headColor = options.headColor || "green";
  //   this.bodyColor = options.bodyColor || "red";

  //   //蛇的方向，默认往右走   left  up  right  down
  //   this.direction = "right";

  //   //约定：第0项指的就是蛇头
  //   this.body = [
  //     {x:2, y:0},
  //     {x:1, y:0},
  //     {x:0, y:0}
  //   ];
  // }
  // Snake.prototype.render = function (target) {
  //   for(var i = 0; i < this.body.length; i++) {
  //     //1. 创建span
  //     var span = document.createElement("span");
  //     //2. 设置span的样式
  //     //2.1 宽度和高度
  //     span.style.width = this.width + "px";
  //     span.style.height = this.height + "px";
  //     //2.2 颜色
  //     span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;
  //     //2.3 位置
  //     span.style.position = "absolute";
  //     span.style.left = this.body[i].x * this.width + "px";
  //     span.style.top = this.body[i].y * this.height + "px";
  //     //3. 把span添加target中
  //     target.appendChild(span);
  //   }
  // }


})(window)