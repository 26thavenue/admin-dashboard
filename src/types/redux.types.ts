export interface NumberOps {
  mobileNumber: string | undefined;
  isOpen: boolean;
  emailAddress: string;
  network: number;
  id: number;
}

export interface Operations {
  number_ops: NumberOps;
}

export interface RootState {
  operations: Operations;
}
