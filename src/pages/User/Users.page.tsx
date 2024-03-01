import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ActionIcon, Button, Group, Loader, Paper, PaperProps, Text } from '@mantine/core';
import { IconDotsVertical, IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import { clearUsers, setUsers } from './User.slice';
import { useAppDispatch, useAppSelector } from '@/redux';
import axiosWebClient from '@/services/AxiosWebClient';

const ICON_SIZE = 16;
const PAGE_SIZES = [5, 10, 15, 20, 25, 50, 100, 200, 500];
const PAPER_PROPS: PaperProps = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
  style: { height: '100%' },
};

const UsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(PAGE_SIZES[1]);

  const { users } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [page, setPage] = React.useState(1);
  const [records, setRecords] = React.useState(users.slice(0, pageSize));

  const getData = React.useCallback(() => {
    setLoading(true);
    axiosWebClient
      .get('users')
      .then((response) => {
        dispatch(setUsers(response.data));
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  React.useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(users.slice(from, to));
  }, [page, pageSize]);

  React.useEffect(() => {
    setPage(1);
  }, [pageSize]);

  React.useEffect(() => {
    if (users?.length === 0) getData();
  }, [getData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      Users : {searchParams.get('active')}
      <Group>
        <Button variant="contained" onClick={() => setSearchParams({ active: 'true' })}>
          Show Active Users
        </Button>
        <Button variant="contained" onClick={() => setSearchParams({ active: 'false' })}>
          Hide All Users
        </Button>
        <Button variant="contained" onClick={() => navigate('/user/new')}>
          Add User
        </Button>
        <Button variant="contained" onClick={() => dispatch(clearUsers())}>
          Clear Users
        </Button>
      </Group>
      <Paper {...PAPER_PROPS} mt={10}>
        <Group justify="space-between" mb="md">
          <Text size="lg" fw={600}>
            Users
          </Text>
          <ActionIcon>
            <IconDotsVertical size={ICON_SIZE} />
          </ActionIcon>
        </Group>
        <DataTable
          verticalSpacing="sm"
          highlightOnHover
          withTableBorder
          withColumnBorders
          pinLastColumn
          totalRecords={users.length}
          paginationActiveBackgroundColor="grape"
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          columns={[
            { accessor: 'name', title: 'Name' },
            { accessor: 'email', title: 'E-Mail' },
            {
              accessor: 'actions',
              title: 'Actions',
              render: ({ id }) => (
                <Group gap={4} wrap="nowrap">
                  <ActionIcon
                    size="sm"
                    variant="subtle"
                    color="green"
                    onClick={() => navigate(`/user/${id}`)}
                  >
                    <IconEye size={16} />
                  </ActionIcon>
                  <ActionIcon
                    size="sm"
                    variant="subtle"
                    color="blue"
                    onClick={() => navigate(`/user/${id}`)}
                  >
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon
                    size="sm"
                    variant="subtle"
                    color="red"
                    onClick={() => navigate(`/user/${id}`)}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
          records={records || []}
          fetching={loading}
        />
      </Paper>
    </>
  );
};

export { UsersPage };
