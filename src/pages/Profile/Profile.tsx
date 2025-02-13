const elements = [
  { projectName: 'Language Fluency', teamName: 'Titans', teamLead: 'Saketh', noOfMembers: 6 },
  { projectName: 'Face detector', teamName: 'Titans-1', teamLead: 'Karthi', noOfMembers: 6 },
  { projectName: 'Health App', teamName: 'Titans-2', teamLead: 'Prani', noOfMembers: 6 },
  { projectName: 'Alaram', teamName: 'Titans-3', teamLead: 'Honey', noOfMembers: 6 },
  { projectName: 'Food web', teamName: 'Titans-4', teamLead: 'Mini', noOfMembers: 6 },
];
import { Table } from '@mantine/core';

function Profile() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.projectName}>
      <Table.Td>{element.teamName}</Table.Td>
      <Table.Td>{element.teamLead}</Table.Td>
      <Table.Td>{element.noOfMembers}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
export default Profile;
