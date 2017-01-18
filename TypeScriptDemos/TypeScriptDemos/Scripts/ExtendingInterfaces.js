var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var CustomEngine = (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, "Custom Engine");
        }, 1000);
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, "Custom Engine");
        }, 1000);
    };
    return CustomEngine;
}());
var Accessory = (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = (function () {
    function Auto(basePrice, engine, make, model) {
        this.basePrice = basePrice;
        this.engine = engine;
        this.make = make;
        this.model = model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = 0.08;
        return this.basePrice + (taxRate * this._basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i - 0] = arguments[_i];
        }
        this.accessoryList = "";
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br />";
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw "Price must be greater than zero.";
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Please supply an engine.";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
window.onload = function () {
    var auto = new Auto(25000, new Engine(125, "V4-L"), "MVC", "2015");
    var engine = auto.engine;
    alert(engine.engineType);
};
