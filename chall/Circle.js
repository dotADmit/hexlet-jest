function getArea() {
  return +(this.radius ** 2 * Math.PI).toFixed(3);
}

function getCircumference() {
  return this.radius * 2 * Math.PI;
}

export default function Circle(radius) {
  this.radius = radius;

  this.getArea = getArea;
  this.getCircumference = getCircumference;
}