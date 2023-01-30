import React from "react";
import { useState } from "react";

const INITIAL_FORM_DATA = {
  weight: "",
  planet: "",
};
// newWeight{weight: '9', planet: 'mars'}

// The data in input form will be used in calculateWeightOnPlanet
const InputForm = ({ calculateWeightOnPlanet }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleChange = (e) => {
    console.log(e);
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    console.log(newFormData);
  };

  const handleInputFormSubmit = (e) => {
    e.preventDefault(); // prevents a complete reload of page
    calculateWeightOnPlanet(formData);
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
      <br></br>
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
      <input type="submit" value="Calculate" />
    </form>
  );
};

export default InputForm;
