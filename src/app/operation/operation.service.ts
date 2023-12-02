import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation, OperationResponse } from '../shared/interfaces/operation';
import { HttpClient } from '@angular/common/http';
import { MOCK_OPERATION } from '../shared/constants/mocks';
import { environment } from '../environments/environment';

/**
 * Service that handles operations related to mathematical challenges.
 */
@Injectable({
  providedIn: 'root',
})
export class OperationService {
  /**
   * Local list of operations for mock purposes.
   */
  private operationList: Operation[] = MOCK_OPERATION;

  /**
   * Base URL for the operation service.
   */
  public basePath!: string;

  /**
   * Path to the maximum integer solver API.
   */
  public maxIntegerSolverPath!: string;

  /**
   * Endpoint for the operation service.
   */
  public operationService!: string;

  /**
   * Constructs the OperationService.
   * @param http - The HTTP client for making API calls.
   */
  constructor(private http: HttpClient) {
    this.basePath = environment.basePath;
    this.maxIntegerSolverPath = environment.maxIntegerSolverPath;
    this.operationService = environment.operationService;
  }

  /**
   * Retrieves a list of operations from the backend service.
   * @returns An Observable of the OperationResponse from the server.
   */
  getOperations(): Observable<OperationResponse> {
    return this.http.get<OperationResponse>(`${this.basePath}${this.maxIntegerSolverPath}${this.operationService}`);
  }

  /**
   * Submits a new operation to the backend service.
   * @param operation - The operation to be added.
   * @returns An Observable of the OperationResponse from the server.
   */
  addOperation(operation: Operation): Observable<OperationResponse> {
    return this.http.post<OperationResponse>(
      `${this.basePath}${this.maxIntegerSolverPath}${this.operationService}`,
      operation
    );
  }
}
