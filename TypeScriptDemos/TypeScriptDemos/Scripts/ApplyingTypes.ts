module ApplyingTypes {

    //  Any
    var data: any;
    var info;
    var doSomething = function (args) {
        return args;
    };
    var x = doSomething(5);

    //  primitives
    var age: number = 22;
    var score: number = 35.36;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return "yes"; }
    var hasHair = !isBald();

    var firstName: string = "Luis";
    var lastName: string = "Gallardo";

    //  string array
    function getArrayLenght(x: string[]) {
        var len: number = x.length;
        return len;
    }

    var names: string[] = ["Luis", "Gaby", "Allan", "German", "Karla", "Jose"];
    var firstPerson = names[0];
    console.log(getArrayLenght(names));

    //  nulls
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //  undefined
    var quantity: number;
    var company = undefined;

}