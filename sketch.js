function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    fill ("black");
    textSize(64)
    textAlign(CENTER, CENTER);
     
    if(mouseX < 50) {
      let palavra = "P";
      text(palavra, 200, 200);
    } else {
      let palavra = "Programação";
      text(palavra, 200, 200);
    }
  }