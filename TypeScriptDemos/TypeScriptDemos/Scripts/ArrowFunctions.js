var ArrowFunctions;
(function (ArrowFunctions) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || 'unknown person'));
    };
    helloWorld();
    helloWorld("Luis");
    var squareIt;
    var rectA = { h: 10 };
    var rectB = { h: 10, w: 18 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(ArrowFunctions || (ArrowFunctions = {}));
