import React from 'react';
import { Note } from '../components/note'


import './notita.css'

function Notita() {
  return (
    <React.Fragment>
        <header>
          <div className='logout-button'></div>
        </header>
        <Note/>
    </React.Fragment>
  );
}

export default Notita;
