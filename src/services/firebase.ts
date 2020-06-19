import firebase from 'firebase';

const firebaseConfig = {
    apiKey: '',
    authDomain: 'shop-tutorial-7f4ac.firebaseapp.com',
    databaseURL: 'https://shop-tutorial-7f4ac.firebaseio.com',
    projectId: 'shop-tutorial-7f4ac',
    storageBucket: 'shop-tutorial-7f4ac.appspot.com',
    messagingSenderId: '',
    appId: '',
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
