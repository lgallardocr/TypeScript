module Objects {

    //  Object
    var points1 = { x: 10, y: 20 };
    var x = points1.x;

    var points2 = {};
    points2 = { x: 10, y: 20 };

    var points3: Object = { x: 1 };

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log(' Rec Area = ' + rectangle.calcArea()); 

    //  Functions
    var squareIt1 = function (x: number) {
        return x * x;
    }
    var val1 = squareIt1(2);
    console.log("SquaredIt1 = " + val1);

    var val1 = squareIt1(8);
    console.log("SquaredIt1 = " + val1);

    var squareIt = function (rect: { h: number; w?: number; }) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }

    var sq1 = squareIt({ h: 10 });
    console.log("SquareIt = " + sq1);

    var sq2 = squareIt({ h: 10, w: 20 });
    console.log("SquareIt = " + sq2);
    
}