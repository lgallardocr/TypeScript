/// <reference path="../typing/toastr.d.ts" />
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () { return Math.sqrt(this.x + this.x * this.y); };
    return Point;
}());
//var p: IPoint = new Point(3, 4); 
//var dist = p.getDist();
//toastr.info("Distance = " + dist); 
//# sourceMappingURL=internalimplicit.js.map