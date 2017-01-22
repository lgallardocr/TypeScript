namespace Shape {

    export interface IRectangle {
        height: number;
        width: number;
        getArea(): number;
    }

    export class Rectangle implements IRectangle {

        constructor(
            public height: number,
            public width: number
        ) { }

        getArea() {
            return this.height * this.width;
        }
    }

}

var rect: Shape.IRectangle = new Shape.Rectangle(9, 15);
var area = rect.getArea();

toastr.info("Area = " + area);