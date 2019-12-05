import { Collection, initFirestorter } from 'firestorter';
import firebase from '../firebase';

initFirestorter({ firebase: firebase });

export const boards = new Collection('boards', {
    query: (ref) => ref.where('uid', '==', 'bwZ7tWniDrSzo5U1ZlxmJEUDmQJ3')
});
