import diagnosisData from "../../data/diagnoses.json";

import { Diagnosis } from "../../types";

const diagnoses: Array<Diagnosis> = diagnosisData as Array<Diagnosis>;

const getDiagnoses = (): Array<Diagnosis> => {
  return diagnoses;
};

const addDiagnosis = (): null => {
  return null;
};

export default { getDiagnoses, addDiagnosis };
