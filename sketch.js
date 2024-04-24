var canvas;
var sample; // Circle represents Inflation Data Where circle_size is relative to inflation value.
var sample2; //Square represents Unemployment Data Where square_size is relative to OBS_VALUE.
var inflationTable;
var unemploymentTable;

var HeightCanvasSize = 1; //Adjust Canzas height size relative to your screen size and preference.

function preload() {
    inflationTable = loadTable('csv/inflation.csv', 'csv', 'header');
    unemploymentTable = loadTable('csv/unemployment.csv', 'csv', 'header');
}

function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight+windowHeight/HeightCanvasSize);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight+windowHeight/HeightCanvasSize);
    canvas.position(0,0);  //sets canvas position.
    canvas.style('z-index', '10'); //draws canvas in background layer.
    sample = new SampleSystem();
    sample2 = new SampleSystem2();
    sample.loadTarget(0,width,0,height);
    sample2.loadTarget(0,width,0,height);
    background(255);
}

function draw(){
    background(255);
    sample.drawTargets();
    sample2.drawTargets();
}