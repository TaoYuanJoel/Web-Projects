
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    
}

function draw(){
    t=(frameCount*0.004)%1;
    background(0);
    rota((map(t,.0,.25,0,1)));
}

function rota(q) {
    fill(q*50,255-q*50,255*abs(sin(frameCount*0.005)));
    noStroke();
    background(0);
    for (let i = 0; i < width/50; i++) {
        for (let j = 0; j < height/50; j++) {
            push();
            translate(i * 50 + 25, j * 50 + 25);

            if (i % 2 == 0 && j % 2 == 0) {
                rotate(HALF_PI+q*HALF_PI);
            }
            if (i % 2 == 1 && j % 2 == 0) {
                rotate(HALF_PI * 2-q*HALF_PI);
            }
            if (i % 2 == 0 && j % 2 == 1) {
                rotate(0-q*HALF_PI);
            }
            if (i % 2 == 1 && j % 2 == 1) {
                rotate(HALF_PI*3+q*HALF_PI);
            }

            arc(0, 0, 50, 50, 0, HALF_PI * 3, PIE);
            pop();
        }
    }
}
