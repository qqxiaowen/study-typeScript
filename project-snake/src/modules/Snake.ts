// 定义🐍类
class Snake {
  elemet: HTMLElement; // 蛇
  head: HTMLElement; // 蛇头
  body: HTMLCollection; // 蛇身

  constructor() {
    this.elemet = document.querySelector('.snake');
    this.head = document.querySelector('.snake > div');
    this.body = this.elemet.getElementsByTagName('div');
  }

  // 获取蛇头位置
  get x() {
    return this.head.offsetLeft;
  }

  get y() {
    return this.head.offsetTop;
  }

  // 设置蛇头x坐标
  set x(val: number) {
    this.setHeadCoordinates('left', val);
  }
  
  // 设置蛇头y坐标
  set y(val: number) {
    this.setHeadCoordinates('top', val);
  }

  // 统一设置蛇头坐标
  setHeadCoordinates(direction, val) {
    if (direction === 'left' && this.x === val || direction === 'top' && this.y === val) {
      return;
    }
    this.sankeIsLive(val);
    this.moveBody();
    this.head.style[direction] = val + 'px';
    this.checkoutCollideSlef();
  }

  // 判断蛇是否撞墙
  sankeIsLive(val: number): void | never{
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了');
    }
  }

  // 蛇增加身体
  addBody() {
    this.elemet.insertAdjacentHTML('beforeend', '<div></div>');
  }

  // 移动蛇的身体
  moveBody() {
    // 从后往前，依次赋值
    for (let i = this.body.length - 1; i > 0; i--) {
      let x = (this.body[i - 1] as HTMLElement).offsetLeft;
      let y = (this.body[i - 1] as HTMLElement).offsetTop;
      (this.body[i] as HTMLElement).style.left = x + 'px';
      (this.body[i] as HTMLElement).style.top = y + 'px';
    }
  }

  // 判断蛇是否撞到自己
  checkoutCollideSlef() {
    for (let i = 1; i < this.body.length; i++) {
      let item = (this.body[i] as HTMLElement);
      if (item.offsetLeft === this.x && item.offsetTop === this.y) {
        throw new Error('撞到自己了！')
      }
    }
  }

}

export default Snake;