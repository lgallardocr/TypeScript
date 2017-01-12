var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        //  Get/Set methods
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert("Car engine started:" + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(350, "V8");
    var car = new Car(engine);
    car.start();
};
//# sourceMappingURL=DefiningClasses.js.map