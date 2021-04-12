
import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVwTL841_qf_rLfIbdGBhO7XRb6Yn8mgY",
  authDomain: "staysafe-1c3e3.firebaseapp.com",
  projectId: "staysafe-1c3e3",
  storageBucket: "staysafe-1c3e3.appspot.com",
  messagingSenderId: "63594779330",
  appId: "1:63594779330:web:4d40e61bfb8f7b7989a15b",
  measurementId: "G-BTMSYL9XX0"
};

const init = () => {
  return firebase.apps.length <= 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

export const userRegister = (user) => {
  return new Promise((resolve, reject) => {
    init()

    const email = user.email
    const password = user.password

    resolve(user)

    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     var user = userCredential.user;
    //     console.log('user', user);
    //     resolve(user)
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log('err', errorCode, errorMessage);
    //     reject(errorMessage)
    //   });
  })
}

export const userLogin = (user) => {
  return new Promise((resolve, reject) => {
    console.log('userLogin', user);
    init();
    const email = user.email
    const password = user.password

    resolve(user)

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     var user = userCredential.user;
    //     console.log('signInWithEmailAndPassword', user);
    //     resolve(user)
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log('error', errorCode, errorMessage);
    //     reject(errorMessage)
    //   });
  })

}