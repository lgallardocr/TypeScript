var FunctionsAndInterfaces;
(function (FunctionsAndInterfaces) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    //var squareIt:
    //    (rect: { h: number; w?: number }) => number;
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
    var p = {
        name: "Luis",
        age: 28,
        kids: 2,
        calcPets: function () {
            return this.kids * 3;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ", " + this.name;
        }
    };
    var pets = p.calcPets();
    console.log(pets);
    p.makeYounger(5);
    var newAge = p.age;
    console.log(newAge);
    var msg = p.greet("Good day to you");
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    ;
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
})(FunctionsAndInterfaces || (FunctionsAndInterfaces = {}));
