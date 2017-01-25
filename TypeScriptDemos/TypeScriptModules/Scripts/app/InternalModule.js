var Shape;
(function (Shape) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shape.Rectangle = Rectangle;
})(Shape || (Shape = {}));
//var rect: Shape.IRectangle = new Shape.Rectangle(9, 15);
//var area = rect.getArea();
//toastr.info("Area = " + area); 
//# sourceMappingURL=InternalModule.js.map