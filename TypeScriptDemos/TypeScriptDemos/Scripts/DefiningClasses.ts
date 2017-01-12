class Engine {

    constructor(public horsePower: number, public engineType: string) { }

}

class Car {

    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    //  Get/Set methods
    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value === undefined) throw 'Please supply an engine';
        this._engine = value;
    }

    start(): void {
        alert("Car engine started:" + this._engine.engineType);
    }

}

window.onload = function () {
    var engine = new Engine(350, "V8");
    var car = new Car(engine);
    car.start();
}