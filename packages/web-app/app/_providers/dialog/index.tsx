import { useMemo, useState, PropsWithChildren } from 'react';
import { DialogContext, TProps } from './context';
import { DialogWrapper } from '@/app/_ui/components/dialogs/dialog-wrapper';
import { ApplyDialog, SettingsDialog } from '@/app/_ui/components/dialogs';
import { ContributeDialog } from '@/app/_ui/components/dialogs/contribute-dialog';

type TDialogComponent = {
  displayName: string;
  (props: any): JSX.Element;
};

const dialogComponents: TDialogComponent[] = [
  SettingsDialog,
  ApplyDialog,
  ContributeDialog,
];

const emptyProps = {};

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [openDialog, setOpenDialog] = useState('');
  const [props, setProps] = useState(emptyProps);

  const state = useMemo(() => {
    return {
      openDialog,
      open: (name: string, props?: TProps) => {
        setOpenDialog(name);
        if (props) setProps(props);
      },
      close: () => {
        setOpenDialog('');
        // clear props after 300 ms to avoid flashes
        if (props !== emptyProps) {
          setTimeout(() => {
            setProps(emptyProps);
          }, 300);
        }
      },
    };
  }, [openDialog, props]);

  return (
    <DialogContext.Provider value={state}>
      {children}
      {dialogComponents.map((DialogComponent) => (
        <DialogWrapper
          key={DialogComponent.displayName}
          show={openDialog === DialogComponent.displayName}
          close={state.close}
        >
          <DialogComponent {...props} />
        </DialogWrapper>
      ))}
    </DialogContext.Provider>
  );
};
