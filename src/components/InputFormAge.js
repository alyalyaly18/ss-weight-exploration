import React from "react";
import { useState } from "react";
import Select from "react-select";

const INITIAL_FORM_DATA_AGE = {
  month: "",
  day: "",
  year: "",
  planet: "",
};

const InputFormAge = ({ calculateAgeOnPlanet }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA_AGE);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    console.log(e);
    setFormData(newFormData);
    console.log(newFormData);
  };

  const handleInputFormAgeSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    calculateAgeOnPlanet(formData);
    setFormData(INITIAL_FORM_DATA_AGE);
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
    <form onSubmit={handleInputFormAgeSubmit}>
      <div className="age-input">
        <label htmlFor="month">Month:</label>
        <input
          type="text"
          id="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
        />
        <label htmlFor="day">Day:</label>
        <input
          type="text"
          id="day"
          name="day"
          value={formData.day}
          onChange={handleChange}
        />
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
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

export default InputFormAge;
