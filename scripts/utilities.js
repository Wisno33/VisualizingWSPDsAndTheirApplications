/**
 * Miscellaneous functions.
 */

/*Point generation functions. */

// Generates a random point with in an x and y bound.
function generateRandomPoint(xBound, yBound){

    var xSign = Math.floor(Math.random() * 2);
    var ySign = Math.floor(Math.random() * 2);

    xSign = (xSign == 0) ? 1 : -1;
    ySign = (ySign == 0) ? 1 : -1;

    return[xSign * Math.random() * xBound, ySign * Math.random() * yBound];
}

// Creates a point set of size n and stores it in the pointSet global.
function generateRandomPointSet() {
    
    let n = parseInt(numPointsEntry.value);

    // Restricted to 100 points.
    if (pointSet.length + n > 100){
        n = 100 - pointSet.length;
        alert('100 points maximum, points will be truncated.');
    }

    boundsCheck(); // Check the bounds are valid before generation.
    let bounds = board.getBoundingBox();
    // Takes the absolute max of the x and y axis on the board minus some buffer.
    let xBound = Math.max(Math.abs(bounds[0]), Math.abs(bounds[2])) - 0.5; 
    let yBound = Math.max(Math.abs(bounds[1]), Math.abs(bounds[3])) - 0.5;

    var newPointSet = [];

    for (let i = 0; i < n; i++) {
        
        newPointSet.push(generateRandomPoint(xBound, yBound));
    }

    updatePointTextBox(newPointSet);
} 

/* Text box functions point set creation */

// Adds generated points to the point text box for use to see.
function updatePointTextBox(newPoints) {

    var newPointsText = '';
    
    for(var point of newPoints){
        newPointsText += point[0].toFixed(3).toString() + ' ' + 
        point[1].toFixed(3).toString() + '\n';
    }
    
    pointTextBox.value = pointTextBox.value + newPointsText;
}

// Parses points entered in the text box so they can be plotted if valid.
function parseTextPoints() {

    pointSet = [];

    let textBoxInput = pointTextBox.value;
    var text = textBoxInput.split(/\s|\t|\n/);
    
    // Remove whitespace.
    var textPoints = [];
    for(let i = 0; i < text.length; i++) {
        var element = parseFloat(text[i]);

        if(isFinite(element)) 
            textPoints.push(element);
    }

    for (let i = 0; i < textPoints.length; i+=2) {
        var xCord = textPoints[i];
        var yCord = textPoints[i + 1];

        pointSet.push([xCord, yCord]);
    }

    // Clean up text box, of bad points and whitespace.
    pointTextBox.value = '';
    updatePointTextBox(pointSet);

}

/* Geometric helper functions */

// Computes the euclidean 2D distance.
function distance2D(p1, p2) {
    return JXG.Math.Geometry.distance(p1, p2, 2);
}

// Computes the midpoint on a line.
function midpoint(p1, p2) {
    return [(p1[0] + p2[0]) /2, (p1[1] + p2[1]) /2];
}

// Compute the bounding box of a point set.
function computeBoundingBox(S) {
    
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (let i = 0; i < S.length; i++) {
        
        minX = Math.min(minX, S[i][0]);
        maxX = Math.max(maxX, S[i][0]);
        minY = Math.min(minY, S[i][1]);
        maxY = Math.max(maxY, S[i][1]);
        
    }

    return new Rectangle([[minX, maxY], [maxX, maxY], [maxX, minY], [minX, minY]]);
}

// Splits a given bounding box into two by its longest side.
function splitBoundingBox(R) {

    // Find the first point clockwise of the longest side.
    let anchorPoint = (R.longestSide()[0] == 'l') ? 0 : 1;

    // Calculates the points that split the two longest sides clockwise.
    let splitPoint1 = midpoint(R.vertices[anchorPoint], R.vertices[anchorPoint + 1]);
    let splitPoint2 = midpoint(R.vertices[anchorPoint + 2], R.vertices[(anchorPoint + 3) % 4]);

    if(anchorPoint == 1) {
        return [new Rectangle([R.vertices[0], splitPoint1, splitPoint2, R.vertices[3]]),
                new Rectangle([splitPoint1, R[1], R[2], splitPoint2])];
    }
    else {
        return [new Rectangle([R.vertices[0], R.vertices[1], splitPoint1, splitPoint2]),
                new Rectangle([splitPoint1, splitPoint2, R.vertices[2], R.vertices[3]])];
    }
}