export interface Operation {
  x: number;
  y: number;
  n: number;
  result?: number;
}

export interface OperationResponse {
  status: boolean;
  code_status: number;
  message: string;
  data: Operation[];  
}
