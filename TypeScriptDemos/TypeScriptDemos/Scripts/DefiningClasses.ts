class Engine1 {

    constructor(public horsePower: number, public engineType: string) { }

}

class Car {

    private _engine: Engine1;

    constructor(engine: Engine1) {
        this.engine = engine;
    }

    //  Get/Set methods
    get engine(): Engine1 {
        return this._engine;
    }

    set engine(value: Engine1) {
        if (value === undefined) throw 'Please supply an engine';
        this._engine = value;
    }

    start(): void {
        alert("Car engine started:" + this._engine.engineType);
    }

}

window.onload = function () {
    var engine = new Engine1(350, "V8");
    var car = new Car(engine);
    car.start();
}