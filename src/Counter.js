import { observable, action } from "mobx";

const actionSetter = (function() {
    console.log(this);
    return action;
})();

const autoSetup = function(args) {
    console.log(args.name);
};

class Counter {
    @observable count = 0;
    @actionSetter decrease = () => {
        console.log(JSON.stringify(Object.entries(this)));
        console.log(this.constructor.name);
        this.count = --this.count;
    };
    @action increase = () => {
        this.count = ++this.count;
    };
}

autoSetup(Counter);

const Store = new Counter();
export default Store;
