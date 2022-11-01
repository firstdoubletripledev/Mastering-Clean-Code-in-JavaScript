class A {
    constructor(b) {
        this.b = b;
    }

    doThing() {
        console.log("A.doThing");
        this.b.doThing();
    }
}
var a = new A(new B());
a.doThing();