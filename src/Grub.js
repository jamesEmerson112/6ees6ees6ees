class Grub {
  constructor(age, color, food) {
    this.age = (age === undefined) ? 0 : age;
    this.color = (color === undefined) ? 'pink' : color;
    this.food = (food === undefined) ? 'jelly' : food;
  }

  eat() {
    return 'Mmmmmmmmm jelly';
  }
};
