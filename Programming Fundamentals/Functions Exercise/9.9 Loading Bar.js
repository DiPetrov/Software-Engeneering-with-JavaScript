function loadingBar(a) {
    function visualisationPercent(x) {
        let percentSign = '';
        for (let i = 1; i <= x / 10; i++) {
            percentSign += '%';

        }
        return percentSign;
    }

    function visualisationDot(x) {
        let dotSign = '';
        for (let i = 10; i > x / 10; i--) {
            dotSign += '.';
        }
        return dotSign;
    }
    let result = visualisationPercent(a);
    let result2 = visualisationDot(a);

    if (a > 0 && a < 100) {
        console.log(`${a}% [${result}${result2}]\nStill loading...`);
    } else {
        console.log(`${a}% Complete!\n[${result}]`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);