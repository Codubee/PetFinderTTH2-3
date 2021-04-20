import React from 'react';
import { Table } from 'reactstrap';

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
        <tr>
          <th scope="row">2</th>
          <td>Ruff2</td>
          <td>Dog2</td>
          <td>Female</td>
          <td>Shelter2</td>
          <td>example2.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DisplayMatches;