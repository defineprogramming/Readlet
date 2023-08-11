import React from 'react';
import Link from 'next/link';
import { CommandBar } from '@fluentui/react';

const Header = ({ user }) => {
  const items = [
    {
      key: 'home',
      text: 'Home',
      iconProps: { iconName: 'Home' },
      href: '/',
    },
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      href: '/upload',
    },
  ];

  const farItems = user
    ? [
        {
          key: 'dashboard',
          text: `Welcome, ${user.name}`,
          iconProps: { iconName: 'Contact' },
          href: '/dashboard',
        },
        {
          key: 'logout',
          text: 'Logout',
          iconProps: { iconName: 'SignOut' },
          onClick: () => {
            // TODO: Implement logout functionality
          },
        },
      ]
    : [
        {
          key: 'login',
          text: 'Login',
          iconProps: { iconName: 'SignIn' },
          href: '/login',
        },
        {
          key: 'register',
          text: 'Register',
          iconProps: { iconName: 'AddFriend' },
          href: '/register',
        },
      ];

  return (
    <header>
      <CommandBar items={items} farItems={farItems} />
    </header>
  );
};

export default Header;