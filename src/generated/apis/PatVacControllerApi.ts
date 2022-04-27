// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    PatientVaccineDTO,
} from '../models';

export interface DeletePatientVaccineUsingDELETERequest {
    code: number;
}

export interface GetPatientVaccinesByDatesRangesUsingGETRequest {
    ageFrom: number;
    ageTo: number;
    dateFrom: string;
    dateTo: string;
    sex: string;
    vaccineCode: string;
    vaccineTypeCode: string;
}

export interface GetPatientVaccinesUsingGETRequest {
    oneWeek?: boolean;
}

export interface GetProgYearUsingGET1Request {
    year: number;
}

export interface NewPatientVaccineUsingPOSTRequest {
    patientVaccineDTO: PatientVaccineDTO;
}

export interface UpdatePatientVaccinetUsingPUTRequest {
    code: number;
    patientVaccineDTO: PatientVaccineDTO;
}

/**
 * no description
 */
export class PatVacControllerApi extends BaseAPI {

    /**
     * deletePatientVaccine
     */
    deletePatientVaccineUsingDELETE({ code }: DeletePatientVaccineUsingDELETERequest): Observable<boolean>
    deletePatientVaccineUsingDELETE({ code }: DeletePatientVaccineUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deletePatientVaccineUsingDELETE({ code }: DeletePatientVaccineUsingDELETERequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deletePatientVaccineUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/patientvaccines/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getPatientVaccinesByDatesRanges
     */
    getPatientVaccinesByDatesRangesUsingGET({ ageFrom, ageTo, dateFrom, dateTo, sex, vaccineCode, vaccineTypeCode }: GetPatientVaccinesByDatesRangesUsingGETRequest): Observable<Array<PatientVaccineDTO>>
    getPatientVaccinesByDatesRangesUsingGET({ ageFrom, ageTo, dateFrom, dateTo, sex, vaccineCode, vaccineTypeCode }: GetPatientVaccinesByDatesRangesUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientVaccineDTO>>>
    getPatientVaccinesByDatesRangesUsingGET({ ageFrom, ageTo, dateFrom, dateTo, sex, vaccineCode, vaccineTypeCode }: GetPatientVaccinesByDatesRangesUsingGETRequest, opts?: OperationOpts): Observable<Array<PatientVaccineDTO> | RawAjaxResponse<Array<PatientVaccineDTO>>> {
        throwIfNullOrUndefined(ageFrom, 'ageFrom', 'getPatientVaccinesByDatesRangesUsingGET');
        throwIfNullOrUndefined(ageTo, 'ageTo', 'getPatientVaccinesByDatesRangesUsingGET');
        throwIfNullOrUndefined(dateFrom, 'dateFrom', 'getPatientVaccinesByDatesRangesUsingGET');
        throwIfNullOrUndefined(dateTo, 'dateTo', 'getPatientVaccinesByDatesRangesUsingGET');
        throwIfNullOrUndefined(sex, 'sex', 'getPatientVaccinesByDatesRangesUsingGET');
        throwIfNullOrUndefined(vaccineCode, 'vaccineCode', 'getPatientVaccinesByDatesRangesUsingGET');
        throwIfNullOrUndefined(vaccineTypeCode, 'vaccineTypeCode', 'getPatientVaccinesByDatesRangesUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'ageFrom': ageFrom,
            'ageTo': ageTo,
            'dateFrom': (dateFrom as any).toISOString(),
            'dateTo': (dateTo as any).toISOString(),
            'sex': sex,
            'vaccineCode': vaccineCode,
            'vaccineTypeCode': vaccineTypeCode,
        };

        return this.request<Array<PatientVaccineDTO>>({
            url: '/patientvaccines/filter',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getPatientVaccines
     */
    getPatientVaccinesUsingGET({ oneWeek }: GetPatientVaccinesUsingGETRequest): Observable<Array<PatientVaccineDTO>>
    getPatientVaccinesUsingGET({ oneWeek }: GetPatientVaccinesUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientVaccineDTO>>>
    getPatientVaccinesUsingGET({ oneWeek }: GetPatientVaccinesUsingGETRequest, opts?: OperationOpts): Observable<Array<PatientVaccineDTO> | RawAjaxResponse<Array<PatientVaccineDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = {};

        if (oneWeek != null) { query['oneWeek'] = oneWeek; }

        return this.request<Array<PatientVaccineDTO>>({
            url: '/patientvaccines/week',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getProgYear
     */
    getProgYearUsingGET1({ year }: GetProgYearUsingGET1Request): Observable<number>
    getProgYearUsingGET1({ year }: GetProgYearUsingGET1Request, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getProgYearUsingGET1({ year }: GetProgYearUsingGET1Request, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(year, 'year', 'getProgYearUsingGET1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            url: '/patientvaccines/progyear/{year}'.replace('{year}', encodeURI(year)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newPatientVaccine
     */
    newPatientVaccineUsingPOST({ patientVaccineDTO }: NewPatientVaccineUsingPOSTRequest): Observable<boolean>
    newPatientVaccineUsingPOST({ patientVaccineDTO }: NewPatientVaccineUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newPatientVaccineUsingPOST({ patientVaccineDTO }: NewPatientVaccineUsingPOSTRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(patientVaccineDTO, 'patientVaccineDTO', 'newPatientVaccineUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/patientvaccines',
            method: 'POST',
            headers,
            body: patientVaccineDTO,
        }, opts?.responseOpts);
    };

    /**
     * updatePatientVaccinet
     */
    updatePatientVaccinetUsingPUT({ code, patientVaccineDTO }: UpdatePatientVaccinetUsingPUTRequest): Observable<number>
    updatePatientVaccinetUsingPUT({ code, patientVaccineDTO }: UpdatePatientVaccinetUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    updatePatientVaccinetUsingPUT({ code, patientVaccineDTO }: UpdatePatientVaccinetUsingPUTRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(code, 'code', 'updatePatientVaccinetUsingPUT');
        throwIfNullOrUndefined(patientVaccineDTO, 'patientVaccineDTO', 'updatePatientVaccinetUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<number>({
            url: '/patientvaccines/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: patientVaccineDTO,
        }, opts?.responseOpts);
    };

}