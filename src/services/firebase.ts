import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBNVZPqQRUwqZFrKpiG4WbBsQ-7fx0dUA4',
    authDomain: 'shop-tutorial-7f4ac.firebaseapp.com',
    databaseURL: 'https://shop-tutorial-7f4ac.firebaseio.com',
    projectId: 'shop-tutorial-7f4ac',
    storageBucket: 'shop-tutorial-7f4ac.appspot.com',
    messagingSenderId: '350990794326',
    appId: '1:350990794326:web:02552ab89feb4586dcc5f7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();

export const firebaseService = {
    async signInWithGoogle() {
        await firebaseAuth.useDeviceLanguage();
        await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        return await firebaseAuth.signInWithRedirect(
            new firebase.auth.GoogleAuthProvider(),
        );
    },
    getRedirectResult() {
        return firebaseAuth.getRedirectResult();
    },

    signOut() {
        return firebaseAuth.signOut();
    },

    onAuthStateChanged: firebaseAuth.onAuthStateChanged.bind(firebaseAuth),
};
