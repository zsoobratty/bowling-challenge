'use strict'

function Bowling() {
    // array storing all the bowls
    this.shots = [];
};

Bowling.prototype.bowl = function(pins) {
    // push number of pins scored into shots array
    this.shots.push(pins) 
};

Bowling.prototype.score = function() {
    var score = 0
    // index of shots array starting at 0:
    var shotIndex = 0

    // iterate through shots array to total score
    // loop through 10 frames
    for(var i = 0; i < 10; i++) {
        if (this.shots[shotIndex] === 10) {
            // strike logic
            score += 10 + this.shots[shotIndex + 1] + this.shots[shotIndex + 2];
            shotIndex++
            continue;
        }
        var scorePerFrame = this.shots[shotIndex] + this.shots[shotIndex + 1];
        
        if (scorePerFrame === 10) {
            // spare logic
            score += 10 + this.shots[shotIndex + 2];
        } else {
            score += scorePerFrame
        }
        // next round
        shotIndex += 2
    };
    return score;
};
