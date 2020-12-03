import React from "react";
import DoggoItem from "./DoggoItem";
import useDoggos from "./useDoggos";

const DoggosList: React.FC = () => {
  const { doggos } = useDoggos();

  return (
    <ul>
      {doggos.map((doggo, index) => (
        <DoggoItem key={index} doggo={doggo} />
      ))}
    </ul>
  );
};

export default DoggosList;
