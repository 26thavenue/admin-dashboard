export interface NumberOps {
  isOpen: boolean;
  emailAddress: string;
  network: number
}

export interface Operations {
  number_ops: NumberOps;
}

export interface RootState {
  operations: Operations;
}
