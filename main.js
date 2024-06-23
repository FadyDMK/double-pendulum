//length
let l1 = 100;
let l2 = 100;
//mass
let m1 = 30;
let m2 = 30;
//angular velocity
let av1 = 0;
let av2 = 0;
//acceleration
let ax1 = 0;
let ax2 = 0;
//g force
let g = 0.5;
//angles
let a1 = Math.PI / 2; // Convert to radians
let a2 = Math.PI / 2; // Convert to radians

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // Calculate positions of the pendulum bobs
  let x1 = 250 + l1 * sin(a1);
  let y1 = 250 + l1 * cos(a1);
  let x2 = x1 + l2 * sin(a2);
  let y2 = y1 + l2 * cos(a2);

  // Draw the lines and bobs
  line(250, 250, x1, y1);
  fill("black");
  ellipse(x1, y1, m1);
  ellipse(x2, y2, m2);
  noFill();
  line(x1, y1, x2, y2);

  // Calculate the accelerations
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = av2 * av2 * l2 + av1 * av1 * l1 * cos(a1 - a2);
  let den1 = l1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  ax1 = (num1 + num2 + num3 * num4) / den1;

  num1 = 2 * sin(a1 - a2);
  num2 = av1 * av1 * l1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(a1);
  num4 = av2 * av2 * l2 * m2 * cos(a1 - a2);
  let den2 = l2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  ax2 = (num1 * (num2 + num3 + num4)) / den2;

  // Update the velocities and angles
  av1 += ax1;
  av2 += ax2;
  a1 += av1;
  a2 += av2;
}