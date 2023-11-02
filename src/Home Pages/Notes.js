import React, { useState } from 'react'
import notes from './notes.css'

export default function Notes() {
    const [saveNotes,setSaveNotes]=useState('');
    localStorage.setItem('Notes',saveNotes)

  return (
        <>
            <div className='notes'>
                <div className='notes-content'>
                    <h3>All Notes</h3>
                    <textarea rows='13' cols='33' value={saveNotes} placeholder='Enter Your Notes' onChange={(e)=>{setSaveNotes(e.target.value)}} />
                </div>

            </div>
        </>
  )
}
