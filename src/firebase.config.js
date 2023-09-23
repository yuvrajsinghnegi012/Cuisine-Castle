import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAefKFyDIbByGh1La2-YmsC3SxWnq0PUI8",
    authDomain: "cuisine-castle-bda3b.firebaseapp.com",
    databaseURL: "https://cuisine-castle-bda3b-default-rtdb.firebaseio.com",
    projectId: "cuisine-castle-bda3b",
    storageBucket: "cuisine-castle-bda3b.appspot.com",
    messagingSenderId: "805979843729",
    appId: "1:805979843729:web:5021e2eb01fac288696330",
    measurementId: "G-8QCKPB40W0"
  };

  const app = getApps.length > 0 ?  getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};