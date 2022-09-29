//Создать класс Triangle для представления треугольника
// Поля данных должны включать углы и стороны
// Требуется реализовать операции: получения и изменения полей данных,
// вычисления площади, вычисления периметра, вычисления высот, а также
// определения вида треугольника (равносторонний, равнобедренный или прямоугольный)
function TrianglePrototype(side1, side2, side3, angle1, angle2, angle3) {
    if (angle1 + angle2 + angle3 === 180 && side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.angle1 = angle1;
        this.angle2 = angle2;
        this.angle3 = angle3;
    }
}
//Getters
TrianglePrototype.prototype.getSide1 = function () {
    return this.side1;
};
TrianglePrototype.prototype.getSide2 = function () {
    return this.side2;
};
TrianglePrototype.prototype.getSide3 = function () {
    return this.side3;
};
TrianglePrototype.prototype.getAngle1 = function () {
    return this.angle1;
};
TrianglePrototype.prototype.getAngle2 = function () {
    return this.angle2;
};
TrianglePrototype.prototype.getAngle3 = function () {
    return this.angle3;
};
//Setters
TrianglePrototype.prototype.setSide1 = function (side1) {
    this.side1 = side1;
};
TrianglePrototype.prototype.setSide2 = function (side2) {
    this.side2 = side2;
};
TrianglePrototype.prototype.setSide3 = function (side3) {
    this.side3 = side3;
};
TrianglePrototype.prototype.setAngle1 = function (angle1) {
    this.angle1 = angle1;
};
TrianglePrototype.prototype.setAngle2 = function (angle2) {
    this.angle2 = angle2;
};
TrianglePrototype.prototype.setAngle3 = function (angle3) {
    this.angle3 = angle3;
};
TrianglePrototype.prototype.area = function () {
    var p = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
};
TrianglePrototype.prototype.perimeter = function () {
    return (this.side1 + this.side2 + this.side3);
};
TrianglePrototype.prototype.height1 = function () {
    return 2 * this.area() / this.side1;
};
TrianglePrototype.prototype.height2 = function () {
    return 2 * this.area() / this.side2;
};
TrianglePrototype.prototype.height3 = function () {
    return 2 * this.area() / this.side3;
};
TrianglePrototype.prototype.describe = function () {
    if (this.angle1 === 90 || this.angle2 === 90 || this.angle3 === 90) {
        alert("Triangle is right");
    }
    else {
        if (this.angle1 === 60 && this.angle2 === 60 && this.angle3 === 60) {
            alert("Triangle is equilateral");
        }
        else {
            if ((this.angle1 === this.angle2) || (this.angle1 === this.angle3) || (this.angle2 === this.angle3)) {
                alert("Triangle is isosceles");
            }
            else {
                alert("just a triangle");
            }
        }
    }
};
//Class
class TriangleClass {
    #side1
    #side2
    #side3
    #angle1
    #angle2
    #angle3
    constructor(side1, side2,side3,angle1,angle2,angle3) {
        if (angle1+angle2+angle3===180 && side1<side2+side3 && side2<side1+side3 && side3<side1+side2){
            this.#side1 = side1;
            this.#side2 = side2
            this.#side3 = side3
    
            this.#angle1 = angle1
            this.#angle2 = angle2
            this.#angle3 = angle3
        }
        else {
            alert("Not a triangle")
        }
    }
    
    setAngle1(v) {
        this.#angle1 = v;
    }
    
    getAngle1() {
        return this.#angle1
    }

    setAngle2(v) {
        this.#angle2 = v;
    }
    
    getAngle2() {
        return this.#angle2
    }

    setAngle3(v ) {
        this.#angle3 = v;
    }
    
    getAngle3() {
        return this.#angle3
    }

    setSide1(v) {
        this.#side1 = v;
    }
    
    getSide1() {
        return this.#side1
    }

    setSide2(v) {
        this.#side2 = v;
    }
    
    getSide2() {
        return this.#side2
    }

    setSide3(v ) {
        this.#side3 = v;
    }
    
    getSide3(){
        return this.#side3
    }
    area(){
        let p =(this.#side1+this.#side2+this.#side3)/2
        return Math.sqrt(p*(p-this.#side1)*(p-this.#side2)*(p-this.#side3))
    }
    perimeter(){
        return (this.#side1+this.#side2+this.#side3)
    }
    height1(){
        return 2*this.area()/this.#side1
    }

    height2(){
        return 2*this.area()/this.#side2
    }

    height3(){
        return 2*this.area()/this.#side3
    }

    describe(){
        if (this.#angle1===90 || this.#angle2===90 || this.#angle3===90){
            alert("Triangle is right")
        }
        else{
            if (this.#angle1===60 && this.#angle2===60 && this.#angle3===60){
                alert("Triangle is equilateral")
            }
            else{
                if ((this.#angle1===this.#angle2)||(this.#angle1===this.#angle3)||(this.#angle2===this.#angle3)){
                    alert("Triangle is isosceles")
                }
                else{
                    alert("just a triangle")
                }
            }
        }
    }
    
}
