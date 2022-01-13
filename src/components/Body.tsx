import React from 'react';
import {
  SQAdminPageLayout,
  SQAdminMainContent,
  Snackbar,
  useSnackbar,
} from 'scplus-shared-components';

type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  const [snackbarState, { closeSnackbar }] = useSnackbar();

  return (
    <SQAdminPageLayout>
      <SQAdminMainContent>{children}</SQAdminMainContent>
      <Snackbar
        position={{ vertical: 'top', horizontal: 'right' }}
        snackbarState={snackbarState}
        closeSnackbar={closeSnackbar}
      />
    </SQAdminPageLayout>
  );
}
