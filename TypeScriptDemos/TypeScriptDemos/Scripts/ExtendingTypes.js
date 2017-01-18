/*
class Engine {

    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto {

    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model: string) {
        this.basePrice = basePrice;
        this.engine = engine;
        this.make = make;
        this.model = model;
    }

    calculateTotal(): number {
        var taxRate = 0.08;
        return this.basePrice + (taxRate * this._basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = "";
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br />";
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw "Price must be greater than zero.";
        this._basePrice = value;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw "Please supply an engine."
        this._engine = value;
    }
}

class Trunk extends Auto {

    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model: string,
        bedLength: string, fourByFour: boolean) {

        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }

}


window.onload = function () {
    var trunk = new Trunk(40000, new Engine(300, "V8"), "Chevy", "Silverado",
        "Long Bed", true);

    trunk.addAccessories(new Accessory(25, "Radio"), new Accessory(568, "Sunroof"));

    trunk.engine.start((status: boolean, engineType: string) => {
        alert(engineType + " was started.")
    });

    alert(trunk.getAccessoryList());
}

*/ 
