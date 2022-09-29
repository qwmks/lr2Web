//Создать класс Triangle для представления треугольника
// Поля данных должны включать углы и стороны
// Требуется реализовать операции: получения и изменения полей данных,
// вычисления площади, вычисления периметра, вычисления высот, а также
// определения вида треугольника (равносторонний, равнобедренный или прямоугольный)

function TrianglePrototype(side1, side2,side3,angle1,angle2,angle3) {
    if (angle1+angle2+angle3===180 && side1<side2+side3 && side2<side1+side3 && side3<side1+side2){
        this.side1 = side1;
        this.side2 = side2
        this.side3 = side3

        this.angle1 = angle1
        this.angle2 = angle2
        this.angle3 = angle3
    }
}

//Getters

TrianglePrototype.prototype.getSide1=function () {
    return this.side1
}

TrianglePrototype.prototype.getSide2=function () {
    return this.side2
}
TrianglePrototype.prototype.getSide3=function () {
    return this.side3
}
TrianglePrototype.prototype.getAngle1=function () {
    return this.angle1
}
TrianglePrototype.prototype.getAngle2=function () {
    return this.angle2
}
TrianglePrototype.prototype.getAngle3=function () {
    return this.angle3
}

//Setters

TrianglePrototype.prototype.setSide1=function (side1:number) {
    this.side1 = side1
}

TrianglePrototype.prototype.setSide2=function (side2:number) {
    this.side2 =side2
}
TrianglePrototype.prototype.setSide3=function (side3:number) {
    this.side3 =side3
}
TrianglePrototype.prototype.setAngle1=function (angle1:number) {
    this.angle1 =angle1
}
TrianglePrototype.prototype.setAngle2=function (angle2:number) {
    this.angle2 = angle2
}
TrianglePrototype.prototype.setAngle3=function (angle3:number) {
    this.angle3 = angle3
}


TrianglePrototype.prototype.area= function(){
    let p =(this.side1+this.side2+this.side3)/2
    return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3))
}

TrianglePrototype.prototype.perimeter = function(){
    return (this.side1+this.side2+this.side3)
}

TrianglePrototype.prototype.height1 = function(){
    return 2*this.area()/this.side1
}

TrianglePrototype.prototype.height2 = function(){
    return 2*this.area()/this.side2
}

TrianglePrototype.prototype.height3 = function(){
    return 2*this.area()/this.side3
}

TrianglePrototype.prototype.describe=function(){
    if (this.angle1===90 || this.angle2===90 || this.angle3===90){
        alert("Triangle is right")
    }
    else{
        if (this.angle1===60 && this.angle2===60 && this.angle3===60){
            alert("Triangle is equilateral")
        }
        else{
            if ((this.angle1===this.angle2)||(this.angle1===this.angle3)||(this.angle2===this.angle3)){
                alert("Triangle is isosceles")
            }
            else{
                alert("just a triangle")
            }
        }
    }
    
}

//Class

class TriangleClass {
    constructor(side1, side2,side3,angle1,angle2,angle3) {
        if (angle1+angle2+angle3===180 && side1<side2+side3 && side2<side1+side3 && side3<side1+side2){
            this.side1 = side1;
            this.side2 = side2
            this.side3 = side3
    
            this.angle1 = angle1
            this.angle2 = angle2
            this.angle3 = angle3
        }
    }
    
    public set angle1(v : number) {
        this.angle1 = v;
    }
    
    public get angle1() : number {
        return this.angle1
    }

    public set angle2(v : number) {
        this.angle2 = v;
    }
    
    public get angle2() : number {
        return this.angle2
    }

    public set angle3(v : number) {
        this.angle3 = v;
    }
    
    public get angle3() : number {
        return this.angle3
    }

    public set side1(v : number) {
        this.side1 = v;
    }
    
    public get side1() : number {
        return this.side1
    }

    public set side2(v : number) {
        this.side2 = v;
    }
    
    public get side2() : number {
        return this.side2
    }

    public set side3(v : number) {
        this.side3 = v;
    }
    
    public get side3() : number {
        return this.side3
    }
    area(){
        let p =(this.side1+this.side2+this.side3)/2
        return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3))
    }
    perimeter(){
        return (this.side1+this.side2+this.side3)
    }
    height1(){
        return 2*this.area()/this.side1
    }

    height2(){
        return 2*this.area()/this.side2
    }

    height3(){
        return 2*this.area()/this.side3
    }

    describe(){
        if (this.angle1===90 || this.angle2===90 || this.angle3===90){
            alert("Triangle is right")
        }
        else{
            if (this.angle1===60 && this.angle2===60 && this.angle3===60){
                alert("Triangle is equilateral")
            }
            else{
                if ((this.angle1===this.angle2)||(this.angle1===this.angle3)||(this.angle2===this.angle3)){
                    alert("Triangle is isosceles")
                }
                else{
                    alert("just a triangle")
                }
            }
        }
    }
    
}
