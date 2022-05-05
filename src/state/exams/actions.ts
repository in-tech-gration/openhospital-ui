import isEmpty from "lodash.isempty";
import { Dispatch } from "redux";
import {
  BASE_PATH,
  Configuration,
  ExamControllerApi,
  ExamDTO,
  ExamRowControllerApi,
  ExamRowDTO,
} from "../../generated";
import { applyTokenMiddleware } from "../../libraries/apiUtils/applyTokenMiddleware";
import { IAction } from "../types";
import {
  GET_EXAMROW_FAIL,
  GET_EXAMROW_LOADING,
  GET_EXAMROW_SUCCESS,
  GET_EXAM_FAIL,
  GET_EXAM_LOADING,
  GET_EXAM_SUCCESS,
} from "./consts";

const examControllerApi = new ExamControllerApi(
  new Configuration({
    middleware: [applyTokenMiddleware],
    basePath: process.env.API_BASE_PATH || BASE_PATH,
  })
);

const examRowControllerApi = new ExamRowControllerApi(
  new Configuration({
    middleware: [applyTokenMiddleware],
    basePath: process.env.API_BASE_PATH || BASE_PATH,
  })
);

export const getExams =
  () =>
  (dispatch: Dispatch<IAction<ExamDTO[], {}>>): void => {
    dispatch({
      type: GET_EXAM_LOADING,
    });
    examControllerApi.getExamsUsingGET1().subscribe(
      (payload) => {
        if (typeof payload === "object" && !isEmpty(payload)) {
          dispatch({
            type: GET_EXAM_SUCCESS,
            payload: payload,
          });
        } else {
          dispatch({
            type: GET_EXAM_SUCCESS,
            payload: [],
          });
        }
      },
      (error) => {
        dispatch({
          type: GET_EXAM_FAIL,
          error,
        });
      }
    );
  };

export const getExamRows =
  (examCode: string) =>
  (dispatch: Dispatch<IAction<ExamRowDTO[], {}>>): void => {
    if (examCode !== "") {
      dispatch({
        type: GET_EXAMROW_LOADING,
      });
      examRowControllerApi
        .getExamRowsByExamCodeUsingGET({ examCode })
        .subscribe(
          (payload) => {
            if (typeof payload === "object" && !isEmpty(payload)) {
              dispatch({
                type: GET_EXAMROW_SUCCESS,
                payload: payload,
              });
            } else {
              dispatch({
                type: GET_EXAMROW_SUCCESS,
                payload: [],
              });
            }
          },
          (error) => {
            dispatch({
              type: GET_EXAMROW_FAIL,
              error,
            });
          }
        );
    } else {
      dispatch({
        type: GET_EXAMROW_FAIL,
        error: "Exam code should not be null",
      });
    }
  };
