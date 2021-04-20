import React from 'react';
import { Table } from 'reactstrap';

/* This function displays the matches in a bordered table  */
const DisplayMatches = (props) => {
  return (
    <Table bordered>
      <thead>
        <tr>
            <th></th>
          <th>Name</th>
          <th>Type</th>
          <th>Sex</th>
          <th>Shelter Name</th>
          <th>Adoption Url</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Leo</td>
          <td>Dog</td>
          <td>Female</td>
          <td>Shelter</td>
          <td>example.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DisplayMatches;