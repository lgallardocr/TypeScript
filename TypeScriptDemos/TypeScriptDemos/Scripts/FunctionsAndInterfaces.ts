module FunctionsAndInterfaces {

    interface squareFunction {
        (x: number): number;
    }

    var squareItBasic: squareFunction =
        (num: number) => num * num;

    //  Interface Rectangle
    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt: (rect: Rectangle) => number;
    //var squareIt:
    //    (rect: { h: number; w?: number }) => number;

    var rectA = { h: 10 };
    var rectB = { h: 10, w: 18 };

    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }

    console.log(squareIt(rectA));
    console.log(squareIt(rectB));


    //  Person Interface
    interface IPerson {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: IPerson = {        
        name: "Luis",
        age: 28,
        kids: 2,
        calcPets: function () {
            return this.kids * 3;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
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

    // SesionEval function interface
    interface ISessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): ISessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number) => {
            ratings.push(rating);
        };
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        }

        return {
            addRating: addRating,
            calcRating: calcRating
        }

    };

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);

    console.log(s.calcRating());
}