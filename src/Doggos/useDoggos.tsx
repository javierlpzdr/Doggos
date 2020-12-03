import { useContext } from "react";
import { DoggosContext } from "./DoggosContext";
import { Doggo } from "./DoggosTypes.d";

function useDoggos() {
  const { doggos, setDoggos } = useContext(DoggosContext);
  const removeDoggo = (doggoToRemove: Doggo) => {
    setDoggos(doggos.filter((doggo: Doggo) => doggo !== doggoToRemove));
  };

  const addDoggo = (doggoToAdd: Doggo) => {
    setDoggos([...doggos, doggoToAdd]);
  };

  const updateDoggo = (doggoToUpdate: Doggo) => {
    setDoggos([
      ...doggos.map((doggo: Doggo) => {
        if (doggo.code === doggoToUpdate.code) {
          return doggoToUpdate;
        }
        return doggo;
      })
    ]);
  };

  return { doggos, addDoggo, removeDoggo, updateDoggo };
}

export default useDoggos;
