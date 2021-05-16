// 定义一个食物类
class Food {
  private element: HTMLElement;

  constructor() {
    this.element = document.querySelector('.food');
  }

  get x():number {
    return this.element.offsetLeft;
  }

  get y():number {
    return this.element.offsetTop;
  }

  // 获取随机数
  getRandom(): string {
    // 必须是0-290中的10的倍数
    return Math.round(Math.random() * 29) * 10 + 'px'
  }
 
  // 改变位置
  changeSite() {
    this.element.style.left = this.getRandom();
    this.element.style.top = this.getRandom();
  }
}

export default Food;