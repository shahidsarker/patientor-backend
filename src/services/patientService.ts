import patients from "../../data/patients";
import { v4 as uuidv4 } from "uuid";

import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
} from "../types";

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

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: String(uuidv4()),
    ...entry,
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getEntries,
  addPatient,
  getNonSensitiveEntries,
};
