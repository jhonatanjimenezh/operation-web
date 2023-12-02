import { Operation } from '../interfaces/operation';

/**
 * Mock data for operations used in testing.
 * @type {Operation[]}
 */
export const MOCK_OPERATION: Operation[] = [
  {
    x: 5,
    y: 0,
    n: 4,
    result: 0,
  },
  {
    x: 5,
    y: 0,
    n: 4,
    result: 0,
  },
  {
    x: 5,
    y: 0,
    n: 4,
    result: 0,
  },
  {
    x: 5,
    y: 0,
    n: 4,
    result: 0,
  },
] as Operation[];


/**
 * Mock response object for successful operations retrieval.
 * @type {{ status: boolean, code_status: number, message: string, data: Operation[] }}
 */
export const MOCK_OPERATIONS_OK = {
  status: true,
  code_status: 200,
  message: "Successful response.",
  data: MOCK_OPERATION
}

/**
 * Mock response object for a successfully created operation.
 * @type {{ status: boolean, code_status: number, message: string, data: Operation[] }}
 */
export const MOCK_OPERATION_CREATED = {
  status: true,
  code_status: 201,
  message: "Operation created successfully.",
  data: MOCK_OPERATION
}

/**
 * Mock response object for an operation error.
 * @type {{ status: boolean, code_status: number, message: string, data: {} }}
 */
export const MOCK_OPERATION_ERROR = {
  status: false,
  code_status: 400,
  message: "Error occurred during the operation.",
  data: {}
}
