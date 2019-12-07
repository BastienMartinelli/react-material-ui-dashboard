import { createContainer } from "unstated-next";
import usePersistedState from "../utils/usePersistedState";
import uuid from "uuid/v1";

type Patient = {
  firstName: string;
  lastName: string;
  id: string;
  sexe: string;
};

function usePatientsStore() {
  const [patients, setPatients] = usePersistedState<Patient[]>("patients", []);
  const [currentPatient, setCurrentPatient] = usePersistedState<Patient | null>(
    "patient",
    null
  );

  function addNewPatient(newPatient: Omit<Patient, "id">) {
    setPatients(prev => [...(prev || []), { ...newPatient, id: uuid() }]);
  }

  function changeCurrentPatient(id: string) {
    const patient = patients.find(p => p.id === id);
    setCurrentPatient(patient || null);
  }

  function getPatientsByName(name: string): Patient[] {
    if (!name) return patients;

    return patients.filter(
      p =>
        p.lastName.toUpperCase().includes(name.toUpperCase()) ||
        p.firstName.toUpperCase().includes(name.toUpperCase())
    );
  }

  return {
    changeCurrentPatient,
    currentPatient,
    patients,
    addNewPatient,
    getPatientsByName
  };
}

export default createContainer(usePatientsStore);
