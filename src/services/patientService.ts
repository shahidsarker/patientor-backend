import patients from "../../data/patients";

import { PatientEntry, NonSensitivePatientEntry } from "../types";

const getEntries = (): PatientEntry[] => patients;

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (): null => null;

export default { getEntries, addPatient, getNonSensitiveEntries };
