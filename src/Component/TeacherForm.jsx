import React from 'react'

export default function TeacherForm() {
  return (
    <div className='teacherform_container'>
         <form class='mt-5'>
        <div>
          <label>Tags :</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label>Video Name :</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label>Video Description</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label>Link</label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label>Template</label>
          <input type="file" />
        </div>
      </form>
    </div>
  )
}