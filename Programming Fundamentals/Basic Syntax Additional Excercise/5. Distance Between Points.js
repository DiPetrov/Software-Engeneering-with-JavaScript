function  distanceBetweenPoints(x1, y1, x2, y2) {

    let dy = y2 - y1;
    let dx = x2 - x1;

    console.log(Math.sqrt(dx * dx + dy * dy));
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);