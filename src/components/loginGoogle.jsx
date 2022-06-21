import React from "react";
// import { collection, getDocs,  } from "firebase/firestore/lite";
// import db from '../firebase/firebaseConfiguration';  
import { useNavigate} from 'react-router-dom';
import { authGoogle } from '../firebase/firebaseConfiguration'


const Google =()=>{
    
    const navigate = useNavigate();
    const SignInGoogle = () => {
      console.log('hola')
      authGoogle().then((result) => {
        navigate("/notita");
        console.log(result);
      })
      .catch((error)=>{
          console.log("ERROR", error)
      })
    };

    return(
      <div className="boton-google-container">
        <button className="boton-google" onClick={ SignInGoogle }>Sign In With Google</button>
      </div>
    )
}

export default Google;