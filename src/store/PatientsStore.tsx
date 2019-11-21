import { createContainer } from "unstated-next";
import usePersistedState from "../utils/usePersistedState";

type Patient = {
  firstName: string;
  lastName: string;
};

type Patients = Patient[];

function usePatientsStore() {
  const [patients, setPatients] = usePersistedState<Patients>("patients", []);

  function addNewPatient(newPatient: Patient) {
    setPatients(prev => [...(prev || []), newPatient]);
  }

  return {
    patients,
    addNewPatient
  };
}

export default createContainer(usePatientsStore);
