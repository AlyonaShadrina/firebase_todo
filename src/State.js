import { observable, action } from "mobx";
import firebase from "./firebase";

const actionSetter = (function() {
    console.log(this);
    return action;
})();

const autoSetup = function(args) {
    console.log(args.name);
};

class State {
    db = firebase.firestore();
    auth = firebase.auth();

    @observable boards = [];
    @observable uid = [];

    // @actionSetter decrease = () => {
    //     console.log(JSON.stringify(Object.entries(this)));
    //     console.log(this.constructor.name);
    //     this.count = --this.count;
    // };

    @action signIn = ({email, password}) => {
        this.auth.signInWithEmailAndPassword(email, password).then((authInfo) => {
            this.uid = authInfo.user.uid;
        });
    };

    @action addBoard = (values) => {
        this.db.collection('boards').add(values).then((smth) => {
            console.log('smth', smth.id);
            this.getAllBoards();
        });
    };

    @action getAllBoards = () => {
        const list = [];
        this.db.collection("boards").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                list.push(doc.data())
            });
            this.boards = list;
        });
    };
}

autoSetup(State);

const Store = new State();
export default Store;
