import isEmpty from "lodash.isempty";
import { Dispatch } from "redux";
import {
  Configuration,
  DiseaseDTO,
  VisitsControllerApi,
  VisitDTO,
  WardDTO,
  PatientDTO,
  BASE_PATH,
} from "../../generated";
import { applyTokenMiddleware } from "../../libraries/apiUtils/applyTokenMiddleware";
import { visitDataFormatter } from "../../libraries/formatUtils/dataFormatting";
import { IAction } from "../types";
import {
  CREATE_VISIT_RESET,
  CREATE_VISIT_LOADING,
  CREATE_VISIT_SUCCESS,
  CREATE_VISIT_FAIL,
  GET_VISIT_FAIL,
  GET_VISIT_LOADING,
  GET_VISIT_SUCCESS,
  GET_VISIT_SUCCESS_EMPTY,
  UPDATE_VISIT_LOADING,
  UPDATE_VISIT_SUCCESS,
  UPDATE_VISIT_FAIL,
  UPDATE_VISIT_RESET,
} from "./consts";

const visitsControllerApi = new VisitsControllerApi(
  new Configuration({
    middleware: [applyTokenMiddleware],
    basePath: process.env.API_BASE_PATH || BASE_PATH,
  })
);

export const createVisit =
  (newVisit: VisitDTO) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: CREATE_VISIT_LOADING,
    });
    visitsControllerApi.newVisitUsingPOST({ newVisit }).subscribe(
      () => {
        dispatch({
          type: CREATE_VISIT_SUCCESS,
        });
      },
      (error) => {
        dispatch({
          type: CREATE_VISIT_FAIL,
          error: error,
        });
      }
    );
  };

export const createVisitReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: CREATE_VISIT_RESET,
    });
  };

export const updateVisitReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: UPDATE_VISIT_RESET,
    });
  };

export const getVisits =
  (code: number) =>
  (dispatch: Dispatch<IAction<VisitDTO[], {}>>): void => {
    dispatch({
      type: GET_VISIT_LOADING,
    });
    visitsControllerApi
      .getVisitUsingGET({
        patID: code,
      })
      .subscribe(
        (payload) => {
          if (typeof payload === "object" && !isEmpty(payload)) {
            dispatch({
              type: GET_VISIT_SUCCESS,
              payload: payload,
            });
          } else {
            dispatch({
              type: GET_VISIT_SUCCESS_EMPTY,
              payload: [],
            });
          }
        },
        (error) => {
          dispatch({
            type: GET_VISIT_FAIL,
            error,
          });
        }
      );
  };

export const updateVisit =
  (visitID: number, updateVisit: VisitDTO) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: UPDATE_VISIT_LOADING,
    });
    visitsControllerApi.updateVisitUsingPUT({ visitID, updateVisit }).subscribe(
      () => {
        dispatch({
          type: UPDATE_VISIT_SUCCESS,
        });
      },
      (error) => {
        dispatch({
          type: UPDATE_VISIT_FAIL,
          error,
        });
      }
    );
  };
