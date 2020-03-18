//Task #1

function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}
  
Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}
  
Animal.prototype._dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
  
    if (amount < 50) {
        throw new Error('Покорми кота!');
    }
    if (amount > 500) {
        throw new Error('Кот будет перекормлен!');
    }
  
    this._foodAmount = amount;
};
  
Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this._dailyNorm() + ' корма.');
};
  
function Cat(name) {
    Animal.apply(this, arguments);
}
  
Cat.prototype = Object.create(Animal.prototype);
  
Cat.prototype.constructor = Cat;
  
Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
}
  
Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
}
  
var jojo = new Cat('Jojo');

console.log(jojo._name);

console.log(jojo._dailyNorm());
console.log(jojo.feed());

jojo._dailyNorm(550);
console.log(jojo.feed());

jojo._dailyNorm(25);
console.log(jojo.feed());

jojo.stroke();

jojo = null;



//Task #2

function deepClone (obj) {
    if (Array.isArray(obj)) {
        var objNew = [];
    } else if (obj instanceof Object) {
        var objNew = {};
    }

    for (var key in obj) {
        if (Array.isArray(obj[key]) || (obj[key] instanceof Object && !(obj[key] instanceof Function))) {
            objNew[key] = deepClone(obj[key]);
        } else {
            objNew[key] = obj[key];
        } 
    }

    return objNew;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);



//Task #2

function isEqual(obj1, obj2) {
    if (Array.isArray(obj1)) {
        if (!Array.isArray(obj2)) {
            return false;
        }
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (var key in obj1) {
            if (obj1[key] !== undefined && obj2[key] === undefined) {
                return false;
            }
            if (isEqual(obj1[key], obj2[key]) === false) {
                return false;
            }
        }
    } else if (obj1 instanceof Object && !(obj1 instanceof Function)) {
        if (!(obj2 instanceof Object && !(obj2 instanceof Function))) {
            return false;
        }
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (var key in obj1) {
            if (obj1[key] !== undefined && obj2[key] === undefined) {
                return false;
            }
            if (isEqual(obj1[key], obj2[key]) === false) {
                return false;
            }
        }
    } else {
        return obj1 === obj2;
    }

    return true;
}

var equal = isEqual(initialObj, clonedObj);

console.log(equal);