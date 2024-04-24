//Class for fetching Inflation data and drawing circles on canvas. 
class SampleSystem {

    constructor() {
        this.samples = []; //Sample position
        this.sampleData = []; //Data Fetch
        this.dir = []; //Movement Direction
    }

    loadTarget(w1, w2, h1, h2) { 
        for (var n = 0; n < inflationTable.getRowCount(); ++n) {
            this.samples.push(createVector(random(w1, w2), random(h1, h2)));
            this.dir.push(createVector(random([-1, 1]), random([-1, 1])));
            this.sampleData.push([inflationTable.getString(n, 'Date'), inflationTable.getString(n, 'CPI(UK)'), 'CPI(UK)']);
        }
        for (var n = 0; n < inflationTable.getRowCount(); ++n) {
            this.samples.push(createVector(random(w1, w2), random(h1, h2)));
            this.dir.push(createVector(random([-1, 1]), random([-1, 1])));
            this.sampleData.push([inflationTable.getString(n, 'Date'), inflationTable.getString(n, 'France'), 'France']);
        }
        for (var n = 0; n < inflationTable.getRowCount(); ++n) {
            this.samples.push(createVector(random(w1, w2), random(h1, h2)));
            this.dir.push(createVector(random([-1, 1]), random([-1, 1])));
            this.sampleData.push([inflationTable.getString(n, 'Date'), inflationTable.getString(n, 'Germany'), 'Germany']);
        }
        for (var n = 0; n < inflationTable.getRowCount(); ++n) {
            this.samples.push(createVector(random(w1, w2), random(h1, h2)));
            this.dir.push(createVector(random([-1, 1]), random([-1, 1])));
            this.sampleData.push([inflationTable.getString(n, 'Date'), inflationTable.getString(n, 'EU27'), 'EU27']);
        }
        for (var n = 0; n < inflationTable.getRowCount(); ++n) {
            this.samples.push(createVector(random(w1, w2), random(h1, h2)));
            this.dir.push(createVector(random([-1, 1]), random([-1, 1])));
            this.sampleData.push([inflationTable.getString(n, 'Date'), inflationTable.getString(n, 'US-HICP'), 'US-HICP']);
        }
    }

    drawTargets() {
        for (var n = 0; n < this.samples.length; ++n) {
            this.pin(this.samples[n].x, this.samples[n].y, this.sampleData[n][0], this.sampleData[n][1], this.sampleData[n][2]);
            this.samples[n].x = this.samples[n].x + this.dir[n].x / 4
            this.samples[n].y = this.samples[n].y + this.dir[n].y / 4
        }
        this.bounce();
    }

    bounce() {
        for (var n = 0; n < this.samples.length; ++n) {
            if (this.samples[n].x <= 0) {
                this.dir[n].x = this.dir[n].x * (-1);
            }
            if (this.samples[n].x >= windowWidth) {
                this.dir[n].x = this.dir[n].x * (-1);
            }
            if (this.samples[n].y <= 0) {
                this.dir[n].y = this.dir[n].y * (-1);
            }
            if (this.samples[n].y >= windowHeight) {
                this.dir[n].y = this.dir[n].y * (-1);
            }
        }
    }

    pin(x, y, date, num, geo) {
        push(); // Start a new drawing state
        strokeWeight(2);
        stroke(12, 78, 177);
        noFill();
        circle(x, y, int(num)*5); //circle size relative to Inflation value.
        pop();

        push(); // Start a new drawing text state
        fill('tomato');
        textSize(10);
        text(geo, x, y-10);  //prints goe data for each circle.
        pop();

        push(); // Start a new drawing text state
        textSize(10);
        fill('cornflowerblue');
        text(date, x, y);  //prints date value for each circle
        pop();
    }

}



//class for fetching Unemployment Data and drawing squares in canvas.
class SampleSystem2 {

    constructor() {
        this.samples = [];
        this.sampleData = [];
        this.dir = [];
    }

    loadTarget(w1, w2, h1, h2) {
        for (var n = 0; n < unemploymentTable.getRowCount(); ++n) {
            this.samples.push(createVector(random(w1, w2), random(h1, h2)));
            this.dir.push(createVector(random([-1, 1]), random([-1, 1])));
            this.sampleData.push([unemploymentTable.getString(n, 'TIME_PERIOD'), unemploymentTable.getString(n, 'OBS_VALUE'), unemploymentTable.getString(n, 'geo')]);
        }
    }

    drawTargets() {
        for (var n = 0; n < this.samples.length; ++n) {
            this.pin(this.samples[n].x, this.samples[n].y, this.sampleData[n][0], this.sampleData[n][1], this.sampleData[n][2]);
            this.samples[n].x = this.samples[n].x + this.dir[n].x / 4
            this.samples[n].y = this.samples[n].y + this.dir[n].y / 4
        }
        this.bounce();
    }

    bounce() {
        for (var n = 0; n < this.samples.length; ++n) {
            if (this.samples[n].x <= 0) {
                this.dir[n].x = this.dir[n].x * (-1);
            }
            if (this.samples[n].x >= windowWidth) {
                this.dir[n].x = this.dir[n].x * (-1);
            }
            if (this.samples[n].y <= 0) {
                this.dir[n].y = this.dir[n].y * (-1);
            }
            if (this.samples[n].y >= windowHeight) {
                this.dir[n].y = this.dir[n].y * (-1);
            }
        }
    }

    pin(x, y, date, num, geo) {
        push(); // Start a new drawing state
        strokeWeight(2);
        stroke(12, 78, 177);
        noFill();
        square(x, y, int(num)); //Square size relative to OBS value.
        pop();

        push(); // Start a new drawing text state
        fill('tomato');
        textSize(10);
        text(geo, x, y-10); //prints geo value for each square.
        pop();

        push(); // Start a new drawing text state
        textSize(10);
        fill('cornflowerblue');
        text(date, x, y); //prints date value for each square.
        pop();
    }

}