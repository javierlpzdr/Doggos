import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Breeds, Doggo } from "./DoggosTypes.d";

interface DoggosFormProps {
  onSubmit: Function;
  initialValue: Doggo;
}

const DoggosForm: React.FC<DoggosFormProps> = ({
  onSubmit,
  initialValue = { code: uuidv4(), breed: Breeds.CHIHUAHUA, name: "" }
}) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newDog: Doggo = { ...formData };

    console.log(event.target.name);
    newDog[event.target.name] = event.target.value;

    setFormData(newDog);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event?.preventDefault();
    onSubmit(formData);
    setFormData({ code: uuidv4(), breed: Breeds.CHIHUAHUA, name: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Breed:
        <select name="breed" value={formData.breed} onChange={handleChange}>
          <option value={Breeds.CHIHUAHUA}>Chihuahua</option>
          <option value={Breeds.GOLDEN}>Golden</option>
        </select>
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default DoggosForm;
