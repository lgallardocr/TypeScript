var ApplyingTypes;
(function (ApplyingTypes) {
    //  Any
    var data;
    var info;
    var doSomething = function (args) {
        return args;
    };
    var x = doSomething(5);
    //  primitives
    var age = 22;
    var score = 35.36;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return "yes"; };
    var hasHair = !isBald();
    var firstName = "Luis";
    var lastName = "Gallardo";
    //  string array
    function getArrayLenght(x) {
        var len = x.length;
        return len;
    }
    var names = ["Luis", "Gaby", "Allan", "German", "Karla", "Jose"];
    var firstPerson = names[0];
    console.log(getArrayLenght(names));
    //  nulls
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //  undefined
    var quantity;
    var company = undefined;
})(ApplyingTypes || (ApplyingTypes = {}));
//# sourceMappingURL=ApplyingTypes.js.map