import { Dispatch } from "redux";
import {
  BASE_PATH,
  Configuration,
  ExaminationControllerApi,
  PatientExaminationDTO,
} from "../../generated";
import { applyTokenMiddleware } from "../../libraries/apiUtils/applyTokenMiddleware";
import { IAction } from "../types";
import {
  CREATE_EXAMINATION_FAIL,
  CREATE_EXAMINATION_LOADING,
  CREATE_EXAMINATION_RESET,
  CREATE_EXAMINATION_SUCCESS,
  DELETE_EXAMINATION_FAIL,
  DELETE_EXAMINATION_RESET,
  SEARCH_EXAMINATION_FAIL,
  SEARCH_EXAMINATION_LOADING,
  SEARCH_EXAMINATION_SUCCESS,
  SEARCH_EXAMINATION_SUCCESS_EMPTY,
  UPDATE_EXAMINATION_FAIL,
  UPDATE_EXAMINATION_LOADING,
  UPDATE_EXAMINATION_RESET,
  UPDATE_EXAMINATION_SUCCESS,
} from "./consts";

const examinationControllerApi = new ExaminationControllerApi(
  new Configuration({
    middleware: [applyTokenMiddleware],
    basePath: process.env.API_BASE_PATH || BASE_PATH,
  })
);

export const createExamination =
  (newPatientExamination: PatientExaminationDTO) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: CREATE_EXAMINATION_LOADING,
    });
    examinationControllerApi
      .newPatientExaminationUsingPOST({ newPatientExamination })
      .subscribe(
        () => {
          dispatch({
            type: CREATE_EXAMINATION_SUCCESS,
          });
        },
        (error) => {
          dispatch({
            type: CREATE_EXAMINATION_FAIL,
            error,
          });
        }
      );
  };

export const createExaminationReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: CREATE_EXAMINATION_RESET,
    });
  };
export const updateExamination =
  (id: number, dto: PatientExaminationDTO) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: UPDATE_EXAMINATION_LOADING,
    });
    examinationControllerApi.updateExaminationUsingPUT({ id, dto }).subscribe(
      () => {
        dispatch({
          type: UPDATE_EXAMINATION_SUCCESS,
        });
      },
      (error) => {
        dispatch({
          type: UPDATE_EXAMINATION_FAIL,
          error,
        });
      }
    );
  };

export const updateExaminationReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: UPDATE_EXAMINATION_RESET,
    });
  };

export const deleteExaminationReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: DELETE_EXAMINATION_RESET,
    });
  };

export const examinationsByPatientId =
  (patId: number | undefined) =>
  (dispatch: Dispatch<IAction<PatientExaminationDTO[], {}>>): void => {
    dispatch({
      type: SEARCH_EXAMINATION_LOADING,
    });
    if (patId) {
      examinationControllerApi
        .getByPatientIdUsingGET({ patId: patId })
        .subscribe(
          (payload) => {
            if (Array.isArray(payload) && payload.length > 0) {
              dispatch({
                type: SEARCH_EXAMINATION_SUCCESS,
                payload: payload,
              });
            } else {
              dispatch({
                type: SEARCH_EXAMINATION_SUCCESS_EMPTY,
                payload: [],
              });
            }
          },
          (error) => {
            dispatch({
              type: SEARCH_EXAMINATION_FAIL,
              error,
            });
          }
        );
    } else
      dispatch({
        type: SEARCH_EXAMINATION_FAIL,
        error: "patient object should not be empty",
      });
  };

export const deleteExamination =
  (code: number | undefined) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    /**
     * delete api not yet available
     */
    dispatch({
      type: DELETE_EXAMINATION_FAIL,
      error: "delete api not yet available !!!",
    });
  };
