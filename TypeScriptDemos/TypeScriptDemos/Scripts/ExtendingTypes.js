var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Trunk = (function (_super) {
    __extends(Trunk, _super);
    function Trunk(basePrice, engine, make, model, bedLength, fourByFour) {
        _super.call(this, basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
    return Trunk;
}(Auto));
window.onload = function () {
    var trunk = new Trunk(40000, new Engine(300, "V8"), "Chevy", "Silverado", "Long Bed", true);
    trunk.addAccessories(new Accessory(25, "Radio"), new Accessory(568, "Sunroof"));
    trunk.engine.start(function (status, engineType) {
        alert(engineType + " was started.");
    });
    alert(trunk.getAccessoryList());
};
//# sourceMappingURL=ExtendingTypes.js.map