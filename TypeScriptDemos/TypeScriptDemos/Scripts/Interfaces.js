/*
interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;

}

class Engine implements IEngine {

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

class CustomEngine implements IEngine {

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, "Custom Engine");
        }, 1000);
    }

}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto {

    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: IEngine, make: string, model: string) {
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

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw "Please supply an engine."
        this._engine = value;
    }
}


window.onload = function () {
    var auto = new Auto(25000, new Engine(125, "V4-L"), "MVC", "2015");
    var engine = <Engine>auto.engine;
    alert(engine.engineType);

}
*/ 
