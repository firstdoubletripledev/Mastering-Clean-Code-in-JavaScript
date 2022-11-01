class Car {
    constructor() {
        this._currentSpeed = 0;
        this.speedObservers = [];
    }

    subscribeSpeedObserver(observer) {
        if(observer.notify) {
            this.speedObservers.push(observer);
        }
        else {
            throw new Error("Invalid observer. notify implementation missing");
        }
    }

    unsubscribeSpeedObserver(observer) {
        let index = this.speedObservers.indexOf(observer);
        if(index > 0) {
            this.speedObservers.splice(index, 0);
        }
    }

    notifySpeedObservers(newVal, oldVal) {
        for(let observer of this.speedObservers) {
            observer.notify(newVal, oldVal);
        }
    }

    get currentSpeed() {
        return this._currentSpeed;
    }

    set currentSpeed(value) {
        let oldVal = this._currentSpeed;
        this._currentSpeed = value;
        if(this._currentSpeed != oldVal) {
            this.notifySpeedObservers(this._currentSpeed, oldVal);
        }
    }
}


class CurrentSpeedConsoleObserver {
    notify(newVal, oldVal) {
        console.log(`Current Speed changed from ${oldVal} to ${newVal}`);
    }
}

class DOMCarSpeedObserver {
    constructor(selector) {
        this.textField = document.querySelector(selector);
    }

    notify(newVal, oldVal) {
        this.textField.textContent = newVal;
    }
}

let car = new Car();
let consoleObserver = new CurrentSpeedConsoleObserver();
let domObserver = new DOMCarSpeedObserver("#speedometer");
car.subscribeSpeedObserver(consoleObserver);
car.subscribeSpeedObserver(domObserver);

let interval = setInterval(() => {
    car.currentSpeed += 10;
}, 2000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);