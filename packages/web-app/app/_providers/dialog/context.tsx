//create a dialog manager context
import { createContext, useContext } from 'react';
import { WriteContractErrorType } from 'viem';

export type TProps = {
  [key: string]: string | number | bigint | `0x${string}` | undefined | null;
};

type TDialogContextValue = {
  openDialog: string;
  open: (name: string, props?: TProps) => void;
  close: () => void;
};

export const DialogContext = createContext<TDialogContextValue | null>(null);

export const useDialog = () => {
  const dialog = useContext(DialogContext);

  if (!dialog) {
    throw new Error('Dialog is not initialized');
  }

  return dialog;
};
