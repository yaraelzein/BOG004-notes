import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyAHCmsUXF2w7_-S1la_UhXmv-h1Krxb8qk",
    authDomain: "notes-b977f.firebaseapp.com",
    projectId: "notes-b977f",
    storageBucket: "notes-b977f.appspot.com",
    messagingSenderId: "191927248262",
    appId: "1:191927248262:web:9d88b24d10e541adeb7807",
    measurementId: "G-TLKFRG4PSZ"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);


  // loging con google
  export const authGoogle = () => {
    console.log('adios')
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
  }

  //guardar notas en el firebase
  export const saveNoteFirebase = async (title, description) => {
    console.log(title)
    console.log(description)
    const docRef = await addDoc (
        collection(db, 'note'),{
          title: title,
          description: description,
        }
    );
    console.log(docRef)
    return(docRef)
} 
  
  
