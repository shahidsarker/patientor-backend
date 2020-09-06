import diagnoses from "../../data/diagnoses";

import { Diagnosis } from "../types";

const getDiagnoses = (): Array<Diagnosis> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return diagnoses;
};

const addDiagnosis = (): null => {
  return null;
};

export default { getDiagnoses, addDiagnosis };
