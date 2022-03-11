var p1, p2;
var len;
var angle;
var slider;

function setup() {
  createCanvas(1000, 900);
  angleMode(DEGREES);
  slider = createSlider(0, 180, 120, 1);
}

function draw() {
  len = 100;
  translate(width / 2, height - 200);

  background(220);

  drawline(len);
  // rotate(angle)
  // drawline(len);
  // rotate(angle)
  // drawline(len);
  loop();
}

function drawline(Len) {
  angle = slider.value();
  strokeWeight(1);
  stroke(237, 34, 93);
  line(0, 0, 0, -Len);
  translate(0, -Len);
  if (Len > 10) {
    push();
    rotate(angle);
    drawline(Len * 0.75);
    pop();
    push();
    rotate(-angle);
    drawline(Len * 0.75);
    pop();
  }
}
