import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Mario Villalobos',
      image:
        'http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png',
      places: 3
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;
