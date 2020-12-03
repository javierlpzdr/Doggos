import React from "react";
import DoggosForm from "./DoggosForm";
import useDoggos from "./useDoggos";

const DoggoCreateForm: React.FC = () => {
  const { addDoggo } = useDoggos();
  return <DoggosForm onSubmit={addDoggo} />;
};

export default DoggoCreateForm;
