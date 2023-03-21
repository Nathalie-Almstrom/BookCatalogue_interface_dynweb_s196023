import React, { useState } from 'react';

const SubjectSelection = (props) => {

  const [selectedValue, setSelectedValue] = useState ("title");

  props.func(selectedValue)

  return (
    <label className="subject-selection">
      <select name="selectedFruit" defaultValue="title" onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="subject">Subject</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
      </select>
    </label>
  )
}

export default SubjectSelection;

