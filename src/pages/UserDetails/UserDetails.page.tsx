import React from 'react';
import { Button, Code, Stack } from '@mantine/core';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux';
import axiosWebClient from '@/services/AxiosWebClient';
import IUser from '../User/types';

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = React.useState<IUser>();
  const { users } = useAppSelector((state) => state.user);

  const handleViewTeam = () => {
    // navigate(`/user/${id}/team`);

    navigate(`/user/${id}/team`, { state: { from: `user/${id}` } });
  };

  const getData = () => {
    axiosWebClient.get(`users/${id}`).then((response) => {
      setUser(response.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Stack>
      <Code>UserDetails : {JSON.stringify(user)}</Code>
      <Button onClick={handleViewTeam}>View Team Members</Button>
      <Link to="/users">Back</Link>
      <Code>Users : {JSON.stringify(users)}</Code>
    </Stack>
  );
};

export { UserDetailsPage };
