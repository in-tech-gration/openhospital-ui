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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    DiseaseTypeDTO,
} from '../models';

export interface DeleteDiseaseTypeRequest {
    code: string;
}

export interface NewDiseaseTypeRequest {
    diseaseTypeDTO: DiseaseTypeDTO;
}

export interface UpdateDiseaseTypeRequest {
    diseaseTypeDTO: DiseaseTypeDTO;
}

/**
 * no description
 */
export class DiseaseTypesApi extends BaseAPI {

    /**
     */
    deleteDiseaseType({ code }: DeleteDiseaseTypeRequest): Observable<{ [key: string]: boolean; }>
    deleteDiseaseType({ code }: DeleteDiseaseTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<{ [key: string]: boolean; }>>
    deleteDiseaseType({ code }: DeleteDiseaseTypeRequest, opts?: OperationOpts): Observable<{ [key: string]: boolean; } | RawAjaxResponse<{ [key: string]: boolean; }>> {
        throwIfNullOrUndefined(code, 'code', 'deleteDiseaseType');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<{ [key: string]: boolean; }>({
            url: '/diseasetypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getAllDiseaseTypes(): Observable<Array<DiseaseTypeDTO>>
    getAllDiseaseTypes(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseTypeDTO>>>
    getAllDiseaseTypes(opts?: OperationOpts): Observable<Array<DiseaseTypeDTO> | RawAjaxResponse<Array<DiseaseTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseTypeDTO>>({
            url: '/diseasetypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newDiseaseType({ diseaseTypeDTO }: NewDiseaseTypeRequest): Observable<DiseaseTypeDTO>
    newDiseaseType({ diseaseTypeDTO }: NewDiseaseTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseTypeDTO>>
    newDiseaseType({ diseaseTypeDTO }: NewDiseaseTypeRequest, opts?: OperationOpts): Observable<DiseaseTypeDTO | RawAjaxResponse<DiseaseTypeDTO>> {
        throwIfNullOrUndefined(diseaseTypeDTO, 'diseaseTypeDTO', 'newDiseaseType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DiseaseTypeDTO>({
            url: '/diseasetypes',
            method: 'POST',
            headers,
            body: diseaseTypeDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateDiseaseType({ diseaseTypeDTO }: UpdateDiseaseTypeRequest): Observable<DiseaseTypeDTO>
    updateDiseaseType({ diseaseTypeDTO }: UpdateDiseaseTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseTypeDTO>>
    updateDiseaseType({ diseaseTypeDTO }: UpdateDiseaseTypeRequest, opts?: OperationOpts): Observable<DiseaseTypeDTO | RawAjaxResponse<DiseaseTypeDTO>> {
        throwIfNullOrUndefined(diseaseTypeDTO, 'diseaseTypeDTO', 'updateDiseaseType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DiseaseTypeDTO>({
            url: '/diseasetypes',
            method: 'PUT',
            headers,
            body: diseaseTypeDTO,
        }, opts?.responseOpts);
    };

}