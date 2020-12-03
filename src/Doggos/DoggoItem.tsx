import React, { useState } from "react";
import DoggosForm from "./DoggosForm";
import useDoggos from "./useDoggos";
import { Doggo } from "./DoggosTypes.d";

interface DoggoItemProps {
  doggo: Doggo;
}

const DoggoItem: React.FC<DoggoItemProps> = ({ doggo }) => {
  const { removeDoggo, updateDoggo } = useDoggos();
  const [editable, setEditable] = useState(false);

  return (
    <li>
      {doggo.breed} {doggo.name}
      <button onClick={() => removeDoggo(doggo)}>Kill the puppy</button>
      <button onClick={() => setEditable(true)}>Update the puppy</button>
      {editable ? (
        <DoggosForm onSubmit={updateDoggo} initialValue={doggo} />
      ) : (
        <></>
      )}
    </li>
  );
};

export default DoggoItem;
