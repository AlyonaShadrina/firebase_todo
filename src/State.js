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
    @observable uid = '';
    @observable refreshToken = '';

    // @actionSetter decrease = () => {
    //     console.log(JSON.stringify(Object.entries(this)));
    //     console.log(this.constructor.name);
    //     this.count = --this.count;
    // };

    @action signIn = ({email, password}) => {
        this.auth.signInWithEmailAndPassword(email, password).then((authInfo) => {
            console.log('authInfo', authInfo);
            const { uid, refreshToken } = authInfo.user;
            this.uid = uid;
            this.refreshToken = refreshToken;
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
