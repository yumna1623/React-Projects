import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import './notesList.css'

function Note({ text, date}) {
  return (
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' size={'1.3em'} style={{cursor: 'pointer'}}/>
        </div>
      
    </div>
  )
}

export default Note
