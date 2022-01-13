import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IconButtonMenu, SystemHeader } from 'scplus-shared-components';

const useStyles = makeStyles(() => {
  return {
    accountIcon: {
      height: '32px',
      width: '32px',
      color: 'var(--color-white)',
    },
  };
});

// TODO: 💡 Change the backgroundColor and Title
export default function Header() {
  const { data: session } = useSession();
  const classes = useStyles();

  const AccountIcon = () => {
    return <AccountCircleIcon className={classes.accountIcon} />;
  };
  const menuItems = [
    {
      id: 1,
      label: session ? 'Sign out' : 'Sign in',
      isDisabled: false,
      onClick: () => {
        if (session) {
          signOut();
        } else {
          signIn();
        }
      },
    },
  ];

  return (
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      productTitle="Skeleton UI"
      headerComponents={
        <IconButtonMenu
          IconComponent={AccountIcon}
          tooltipTitle="Account"
          menuItems={menuItems}
          placement="bottom"
        />
      }
    />
  );
}
