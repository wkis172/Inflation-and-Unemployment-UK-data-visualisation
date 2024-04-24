function preload() {
    dataset = loadTable("./lms.csv", "header"); //load the data file as a table
  }

function setup() {
    // Create the canvas
    createCanvas(800, 600);
    noLoop(); // We do not need to draw continuously
    if (this.data) {
        console.log('Data:', this.data);
        drawGraph();
    } else {
        console.error('Data not loaded');
    }
}

function drawGraph() {
    background(240);
    textSize(12);
    fill(0);

    // Check if data is loaded
    if (data.getRowCount() === 0) {
        console.error('No data in CSV');
        return;
    }

    // Draw bars based on the CSV data
    for (let i = 0; i < data.getRowCount(); i++) {
        let country = data.getString(i, 'Country');
        let gdp = data.getNum(i, 'GDP');
        let inflation = data.getNum(i, 'Inflation');
        let unemployment = data.getNum(i, 'Unemployment');

        // Log drawn data
        console.log('Drawing data for', country, ': GDP=', gdp, ', Inflation=', inflation, ', Unemployment=', unemployment);

        // Calculate bar heights and draw bars
        let gdpHeight = map(gdp, 0, 10, 0, 200);
        let inflationHeight = map(inflation, 0, 10, 0, 200);
        let unemploymentHeight = map(unemployment, 0, 10, 0, 200);

        fill(255, 0, 0); rect(40 + i * 220, 300 - gdpHeight, 50, gdpHeight);
        fill(0, 255, 0); rect(100 + i * 220, 300 - inflationHeight, 50, inflationHeight);
        fill(0, 0, 255); rect(160 + i * 220, 300 - unemploymentHeight, 50, unemploymentHeight);

        noStroke();
        textAlign(CENTER);
        text(country, 100 + i * 220, 320);
    }
}