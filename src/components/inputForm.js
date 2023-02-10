import React from "react";
import { useState } from "react";
import Select from "react-select";

const INITIAL_FORM_DATA = {
  weight: "",
  planet: "",
};

// The data in input form will be used in calculateWeightOnPlanet
const InputForm = ({ calculateWeightOnPlanet }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
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

  // Dropdown menu
  const planets = [
    { value: "mars", label: "Mars" },
    { value: "jupiter", label: "Jupiter" },
    { value: "mercury", label: "Mercury" },
    { value: "neptune", label: "Neptune" },
    { value: "venus", label: "Venus" },
    { value: "saturn", label: "Saturn" },
    { value: "uranus", label: "Uranus" },
  ];
  // Helper function to reset dropdown menu
  const reset = () => {
    setValue("");
  };

  const handleDropChange = (selectedPlanet) => {
    const newFormData = {
      ...formData,
      planet: selectedPlanet.label,
    };
    setFormData(newFormData);
    setValue(selectedPlanet);
  };

  return (
    <form onSubmit={handleInputFormSubmit}>
      <div className="weight-input">
        <label htmlFor="weight">Your Weight on Earth:</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div className="planet-input">
        <label htmlFor="planet">
          Planet in our Solar System You Want to Visit:
        </label>
        <Select
          className="dropdown"
          options={planets}
          value={value}
          onChange={handleDropChange}
        />
      </div>
      <input
        className="calculate"
        type="submit"
        value="Calculate"
        onClick={reset}
      />
    </form>
  );
};

export default InputForm;
