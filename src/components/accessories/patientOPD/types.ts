import { DiseaseDTO, OpdDTO, PatientDTO } from "../../../generated";

export interface IStateProps {
  isLoading: boolean;
  hasSucceeded: boolean;
  hasFailed: boolean;
  diseasesData: DiseaseDTO[] | undefined;
  patient: PatientDTO | undefined;
}
export interface IDispatchProps {
  createOpd: (
    opd: Record<string, any>,
    diseasesList: DiseaseDTO[] | undefined
  ) => any;
  createOpdReset: () => void;
  getDiseasesOpd: () => void;
}

export type TProps = IStateProps & IDispatchProps;

export type TActivityTransitionState = "IDLE" | "TO_RESET";

export type TPatientOPDFormFieldName =
  | "date"
  | "anamnesis"
  | "disease"
  | "disease2"
  | "disease3"
  | "note";
