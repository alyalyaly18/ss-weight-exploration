import React from "react";
import { useState } from "react";

const INITIAL_FORM_DATA = {
  weight: "",
  planet: "",
};

// Takes in parameter of
const inputForm = ({ newWeight }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleChange = (e) => {
    console.log(e);
    const newFormData = {
      ...formData,
      [e.target.planet]: e.target.value,
    };
    setFormData(newFormData);
  };
  // {weight: '9', planet: 'mars'}

  const handleInputFormSubmit = (e) => {
    e.preventDefault(); // why is this needed here? won't it stop submission?
    // does this mean it needs to have information to submit?
    newWeight(formData);
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <form onSubmit={handleInputFormSubmit}>
      <label htmlFor="weight">Your Weight on Earth:</label>
      <input
        type="text"
        id="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />
      <label htmlFor="planet">
        Planet in our Solar System You Want to Visit:
      </label>
      <input
        type="text"
        id="planet"
        name="planet"
        value={formData.planet}
        onChange={handleChange}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

export default inputForm;

// use task list to help with flow
// form data is used in the submit/calculate
//
