import React from "react";
import '../views/notita.css'
import { useState } from "react";
import {saveNoteFirebase} from '../firebase/firebaseConfiguration'



const Note = () => {
    //declarando variable de usestate
    const [description, setCommentText] = useState(""); //inicialización del estado
    const [title, setTitle] = useState("");
    // const [notes, setNotes] = useState([]);
    const SaveNote = () => {
        console.log('title', title)
        console.log('descrption', description)
        saveNoteFirebase(title, description).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
        console.log("holiii")
        // getlistOfNotes()
    }
    //guardar la nota

    return (
        <React.Fragment>
        <div className='note-container'>
            <input 
            type={'text'} 
            placeholder='title' 
            className='title-input' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <textarea  
            placeholder='text' 
            className='text-input'
            value={description}
            onChange={(e) => setCommentText(e.target.value)}
            />
            

            <div className='delete-save-img-container'></div>
        </div>

        <div className='button-create-note-container'>
            <button className='button-create-note' onClick={SaveNote}>+</button>
        </div>
        </React.Fragment>
    )
}

export { Note };